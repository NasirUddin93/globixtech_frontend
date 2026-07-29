// Admin Dashboard Interactive Features & Chart Logic

document.addEventListener('DOMContentLoaded', () => {
    // ── Sidebar collapse ────────────────────────────────
    document.getElementById('toggle-sidebar')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.toggle('collapsed');
    });

    // ── Tab switching ───────────────────────────────────
    const tabTitles: Record<string, string> = {
        overview: 'Dashboard Overview',
        contacts: 'Contact Submissions',
    };

    function switchTab(tabId: string) {
        document.querySelectorAll('.tab-panel').forEach(p => {
            (p as HTMLElement).style.display = 'none';
        });
        document.querySelectorAll('[data-tab]').forEach(el => el.classList.remove('active'));

        const panel = document.getElementById(`tab-${tabId}`);
        if (panel) panel.style.display = 'block';

        const navEl = document.getElementById(`nav-${tabId}`);
        if (navEl) navEl.classList.add('active');

        const titleEl = document.getElementById('page-title');
        if (titleEl) titleEl.textContent = tabTitles[tabId] ?? 'Admin Dashboard';

        // Persist active section to URL hash & localStorage
        try {
            window.location.hash = tabId;
            localStorage.setItem('admin_active_tab', tabId);
        } catch (_) {}
    }

    document.querySelectorAll('[data-tab]').forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();
            const tab = (el as HTMLElement).dataset.tab;
            if (tab === 'overview') {
                window.location.hash = 'overview';
                localStorage.setItem('admin_active_tab', 'overview');
                window.location.reload();
                return;
            }
            if (tab) switchTab(tab);
        });
    });

    document.querySelectorAll('.tab-link').forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();
            const tab = (el as HTMLElement).dataset.tab;
            if (tab) switchTab(tab);
        });
    });

    // Restore active tab on load
    const initialHashTab = window.location.hash.replace('#', '');
    const savedTab = initialHashTab || localStorage.getItem('admin_active_tab') || 'overview';
    if (tabTitles[savedTab]) {
        switchTab(savedTab);
    }

    // ── Live search, filter, sort & pagination ───────────
    let currentSort = { column: 'created_at', direction: 'desc' };
    let currentFilterStatus = '';
    let currentPage = 1;
    let itemsPerPage = 25;

    function applyFiltersAndSort() {
        const searchQuery = (document.getElementById('contact-search') as HTMLInputElement)?.value.toLowerCase() || '';
        const filterStatus = currentFilterStatus;
        const { column, direction } = currentSort;

        const rows = Array.from(document.querySelectorAll('#contacts-table tbody tr')) as HTMLElement[];

        // Sort
        const sortMap: Record<string, (a: HTMLElement, b: HTMLElement) => number> = {
            id: (a, b) => parseInt(a.dataset.id || '0') - parseInt(b.dataset.id || '0'),
            name: (a, b) => a.querySelector('td:nth-child(2)')?.textContent?.localeCompare(b.querySelector('td:nth-child(2)')?.textContent || '') || 0,
            email: (a, b) => a.querySelector('td:nth-child(3)')?.textContent?.localeCompare(b.querySelector('td:nth-child(3)')?.textContent || '') || 0,
            service: (a, b) => {
                const sa = a.querySelector('td:nth-child(6)')?.textContent?.toLowerCase() || '';
                const sb = b.querySelector('td:nth-child(6)')?.textContent?.toLowerCase() || '';
                return sa.localeCompare(sb);
            },
            created_at: (a, b) => new Date(a.querySelector('td:nth-child(7)')?.textContent || '').getTime() - new Date(b.querySelector('td:nth-child(7)')?.textContent || '').getTime(),
        };

        rows.sort((a, b) => {
            const result = sortMap[column] ? sortMap[column](a, b) : 0;
            return direction === 'asc' ? result : -result;
        });

        // Re-append sorted rows
        const tbody = document.querySelector('#contacts-table tbody');
        if (tbody) {
            rows.forEach(row => tbody.appendChild(row));
        }

        // Filter matching rows
        const filteredRows = rows.filter(row => {
            const rowText = row.textContent?.toLowerCase() || '';
            const rowStatus = row.dataset.status?.toLowerCase() || '';

            let visible = true;
            if (searchQuery) visible = visible && rowText.includes(searchQuery);
            if (filterStatus) visible = visible && rowStatus.includes(filterStatus);
            return visible;
        });

        // Calculate pagination
        const totalItems = filteredRows.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
        if (currentPage > totalPages) currentPage = totalPages;
        if (currentPage < 1) currentPage = 1;

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        // Hide all rows, show only current page items with progressive top-to-bottom animation
        rows.forEach(row => { row.style.display = 'none'; });
        let pageVisibleIndex = 0;
        filteredRows.forEach((row, index) => {
            if (index >= startIndex && index < endIndex) {
                row.style.display = '';
                row.style.animation = 'none';
                void row.offsetHeight; // Trigger reflow to restart CSS animation
                row.style.animation = `tableRowCascade 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${pageVisibleIndex * 0.05}s both`;
                pageVisibleIndex++;
            }
        });

        // Update pagination UI
        updatePaginationControls(totalItems, totalPages, startIndex, Math.min(endIndex, totalItems));
        updateSortIndicators();
    }

    function updatePaginationControls(totalItems: number, totalPages: number, startIndex: number, endIndex: number) {
        const infoEl  = document.getElementById('pagination-info');
        const prevBtn = document.getElementById('pagination-prev') as HTMLButtonElement | null;
        const nextBtn = document.getElementById('pagination-next') as HTMLButtonElement | null;
        const pagesEl = document.getElementById('pagination-pages');

        if (infoEl) {
            infoEl.textContent = totalItems === 0
                ? 'Showing 0 items'
                : `Showing ${startIndex + 1}-${endIndex} of ${totalItems} items`;
        }

        if (prevBtn) {
            prevBtn.disabled = currentPage <= 1;
            prevBtn.style.opacity = currentPage <= 1 ? '0.5' : '1';
            prevBtn.style.cursor = currentPage <= 1 ? 'not-allowed' : 'pointer';
        }

        if (nextBtn) {
            nextBtn.disabled = currentPage >= totalPages;
            nextBtn.style.opacity = currentPage >= totalPages ? '0.5' : '1';
            nextBtn.style.cursor = currentPage >= totalPages ? 'not-allowed' : 'pointer';
        }

        if (pagesEl) {
            pagesEl.innerHTML = '';
            for (let i = 1; i <= totalPages; i++) {
                const btn = document.createElement('button');
                btn.textContent = String(i);
                btn.style.padding = '4px 10px';
                btn.style.borderRadius = '6px';
                btn.style.fontSize = '12px';
                btn.style.fontWeight = '600';
                btn.style.cursor = 'pointer';
                btn.style.fontFamily = "'Inter', sans-serif";
                if (i === currentPage) {
                    btn.style.background = '#0071e3';
                    btn.style.color = '#fff';
                    btn.style.border = 'none';
                } else {
                    btn.style.background = '#fff';
                    btn.style.color = '#64748b';
                    btn.style.border = '1px solid #e2e8f0';
                }
                btn.addEventListener('click', () => {
                    currentPage = i;
                    applyFiltersAndSort();
                });
                pagesEl.appendChild(btn);
            }
        }
    }

    document.getElementById('per-page-select')?.addEventListener('change', (e) => {
        itemsPerPage = parseInt((e.target as HTMLSelectElement).value) || 25;
        currentPage = 1;
        applyFiltersAndSort();
    });

    document.getElementById('pagination-prev')?.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            applyFiltersAndSort();
        }
    });

    document.getElementById('pagination-next')?.addEventListener('click', () => {
        currentPage++;
        applyFiltersAndSort();
    });

    function updateSortIndicators() {
        document.querySelectorAll('#contacts-table th[data-sort]').forEach(th => {
            const col = (th as HTMLElement).dataset.sort;
            th.classList.remove('sort-asc', 'sort-desc');
            if (col === currentSort.column) {
                th.classList.add(currentSort.direction === 'asc' ? 'sort-asc' : 'sort-desc');
            }
        });
    }

    document.getElementById('contact-search')?.addEventListener('input', () => {
        currentPage = 1;
        applyFiltersAndSort();
    });

    document.getElementById('filter-status')?.addEventListener('change', (e) => {
        currentFilterStatus = (e.target as HTMLSelectElement).value;
        currentPage = 1;
        applyFiltersAndSort();
    });

    // ── Date sort toggle (Newest / Oldest) ────────────────
    function updateDateSortButtons(direction: 'asc' | 'desc') {
        document.querySelectorAll('.seg-btn, .sort-toggle-btn').forEach(btn => {
            const btnDir = (btn as HTMLElement).dataset.direction;
            btn.classList.toggle('active', btnDir === direction);
        });
    }

    function setDateSort(direction: 'asc' | 'desc') {
        currentSort.column = 'created_at';
        currentSort.direction = direction;
        updateDateSortButtons(direction);
        applyFiltersAndSort();
    }

    document.getElementById('sort-newest')?.addEventListener('click', () => setDateSort('desc'));
    document.getElementById('sort-oldest')?.addEventListener('click', () => setDateSort('asc'));

    // ── Column sorting ───────────────────────────────────
    document.querySelectorAll('#contacts-table th[data-sort]').forEach(th => {
        th.addEventListener('click', () => {
            const col = (th as HTMLElement).dataset.sort;
            if (col) {
                if (currentSort.column === col) {
                    currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
                } else {
                    currentSort.column = col;
                    currentSort.direction = 'desc';
                }
                if (col === 'created_at') {
                    updateDateSortButtons(currentSort.direction as 'asc' | 'desc');
                }
                applyFiltersAndSort();
            }
        });
    });

    applyFiltersAndSort();

    // ── View Message Modal Logic ───────────────────────────────
    const viewModal          = document.getElementById('view-modal')!;
    const viewBackdrop       = document.getElementById('view-modal-backdrop')!;
    const viewMessageEl      = document.getElementById('view-modal-message')!;
    const viewNoteInput      = document.getElementById('view-modal-note') as HTMLTextAreaElement;
    const viewSubjectEl      = document.getElementById('view-modal-subject')!;
    const viewStatusBadge    = document.getElementById('view-modal-status-badge')!;
    const viewDateEl         = document.getElementById('view-modal-date')!;
    const viewNoteEditBtn    = document.getElementById('view-note-edit-btn')!;
    const viewNoteSaveArea   = document.getElementById('view-note-save-area')!;
    const viewNoteSaveBtn    = document.getElementById('view-note-save')!;
    const viewNoteCancelBtn  = document.getElementById('view-note-cancel')!;
    const viewNoteError      = document.getElementById('view-note-error')!;

    let activeViewContactId: number | null = null;

    function openViewModal(name: string, email: string, phone: string, message: string, note: string, status: string, date: string, contactId: number) {
        activeViewContactId = contactId;
        const contactInfo = [email, phone].filter(Boolean).join(' • ');
        if (viewSubjectEl) viewSubjectEl.textContent = `From: ${name}${contactInfo ? ' (' + contactInfo + ')' : ''}`;
        if (viewMessageEl) viewMessageEl.textContent = message;
        if (viewNoteInput) {
            viewNoteInput.value = note || '';
            viewNoteInput.readOnly = true;
        }
        if (viewNoteSaveArea) viewNoteSaveArea.style.display = 'none';
        if (viewNoteError) viewNoteError.style.display = 'none';
        if (viewNoteEditBtn) viewNoteEditBtn.style.display = 'flex';

        const statusColors: Record<string, string> = {
            new: 'badge-new',
            read: 'badge-read',
            replied: 'badge-replied',
            closed: 'badge-closed',
        };
        if (viewStatusBadge) {
            viewStatusBadge.className = `badge ${statusColors[status] || 'badge-new'}`;
            viewStatusBadge.textContent = status;
        }

        if (viewDateEl) {
            viewDateEl.textContent = date ? new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—';
        }

        if (viewModal) viewModal.style.display = 'flex';
    }

    function closeViewModal() {
        if (viewModal) viewModal.style.display = 'none';
        activeViewContactId = null;
        if (viewNoteSaveArea) viewNoteSaveArea.style.display = 'none';
        if (viewNoteEditBtn) viewNoteEditBtn.style.display = 'flex';
        if (viewNoteInput) {
            viewNoteInput.readOnly = true;
            viewNoteInput.style.borderColor = '#e2e8f0';
            viewNoteInput.style.boxShadow = 'none';
        }
    }

    viewNoteEditBtn?.addEventListener('click', () => {
        if (viewNoteInput) {
            viewNoteInput.readOnly = false;
            viewNoteInput.style.borderColor = '#0071e3';
            viewNoteInput.style.boxShadow = '0 0 0 3px rgba(0,113,227,.12)';
            viewNoteInput.focus();
        }
        if (viewNoteSaveArea) viewNoteSaveArea.style.display = 'flex';
        if (viewNoteEditBtn) viewNoteEditBtn.style.display = 'none';
    });

    viewNoteCancelBtn?.addEventListener('click', () => {
        if (viewNoteInput) {
            viewNoteInput.readOnly = true;
            viewNoteInput.style.borderColor = '#e2e8f0';
            viewNoteInput.style.boxShadow = 'none';
        }
        if (viewNoteSaveArea) viewNoteSaveArea.style.display = 'none';
        if (viewNoteEditBtn) viewNoteEditBtn.style.display = 'flex';
        if (viewNoteError) viewNoteError.style.display = 'none';

        if (activeViewContactId) {
            const btn = document.querySelector(`.btn-view[data-id="${activeViewContactId}"]`) as HTMLElement | null;
            if (btn && viewNoteInput) viewNoteInput.value = btn.dataset.note || '';
        }
    });

    viewNoteSaveBtn?.addEventListener('click', async () => {
        if (!activeViewContactId || !viewNoteInput) return;

        const note = viewNoteInput.value.trim();
        viewNoteSaveBtn.textContent = 'Saving…';
        viewNoteSaveBtn.setAttribute('disabled', 'true');
        if (viewNoteError) viewNoteError.style.display = 'none';

        const tokenMatch = document.cookie.match(/admin_token=([^;]+)/);
        const token = tokenMatch ? decodeURIComponent(tokenMatch[1]) : '';

        try {
            const res = await fetch(`http://127.0.0.1:8000/api/admin/contacts/${activeViewContactId}/note`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ note }),
            });

            if (!res.ok) throw new Error('Request failed');

            const btn = document.querySelector(`.btn-view[data-id="${activeViewContactId}"]`) as HTMLElement | null;
            if (btn) btn.dataset.note = note;

            viewNoteInput.readOnly = true;
            viewNoteInput.style.borderColor = '#e2e8f0';
            viewNoteInput.style.boxShadow = 'none';
            if (viewNoteSaveArea) viewNoteSaveArea.style.display = 'none';
            if (viewNoteEditBtn) viewNoteEditBtn.style.display = 'flex';
            viewNoteSaveBtn.innerHTML = '<i class="fas fa-check" style="font-size:10px;"></i> Save Summary';
            viewNoteSaveBtn.removeAttribute('disabled');
        } catch (err) {
            if (viewNoteError) {
                viewNoteError.textContent = 'Could not save summary. Please try again.';
                viewNoteError.style.display = 'block';
            }
            viewNoteSaveBtn.innerHTML = '<i class="fas fa-check" style="font-size:10px;"></i> Save Summary';
            viewNoteSaveBtn.removeAttribute('disabled');
        }
    });

    document.addEventListener('click', e => {
        const btn = (e.target as HTMLElement).closest('.btn-view') as HTMLElement | null;
        if (btn) {
            const name    = btn.dataset.name ?? '';
            const email   = btn.dataset.email ?? '';
            const phone   = btn.dataset.phone ?? '';
            const message = btn.dataset.message ?? '';
            const note    = btn.dataset.note ?? '';
            const date    = btn.dataset.date ?? '';
            const id      = parseInt(btn.dataset.id ?? '0');
            const row     = btn.closest('tr') as HTMLElement;
            const status  = row.dataset.status ?? 'new';
            openViewModal(name, email, phone, message, note, status, date, id);
        }
    });

    viewBackdrop?.addEventListener('click', closeViewModal);
    document.getElementById('view-modal-close')?.addEventListener('click', closeViewModal);
    document.getElementById('view-modal-dismiss')?.addEventListener('click', closeViewModal);

    // ── Done Modal ───────────────────────────────────────
    const modal       = document.getElementById('done-modal');
    const backdrop    = document.getElementById('modal-backdrop');
    const noteInput   = document.getElementById('modal-note') as HTMLTextAreaElement;
    const submitBtn   = document.getElementById('modal-submit');
    const submitText  = document.getElementById('modal-submit-text');
    const errorBox    = document.getElementById('modal-error');
    const contactName = document.getElementById('modal-contact-name');

    let activeContactId: number | null = null;
    let activeRow: HTMLElement | null  = null;

    const confirmModal      = document.getElementById('confirm-done-modal');
    const confirmBackdrop   = document.getElementById('confirm-modal-backdrop');
    const confirmCancelBtn  = document.getElementById('confirm-modal-cancel');
    const confirmProceedBtn = document.getElementById('confirm-modal-proceed');

    const successModal      = document.getElementById('success-done-modal');
    const successBackdrop   = document.getElementById('success-modal-backdrop');
    const successCloseBtn   = document.getElementById('success-modal-close');

    function openConfirmModal() { if (confirmModal) confirmModal.style.display = 'flex'; }
    function closeConfirmModal() { if (confirmModal) confirmModal.style.display = 'none'; }
    function openSuccessModal() { if (successModal) successModal.style.display = 'flex'; }
    function closeSuccessModal() { if (successModal) successModal.style.display = 'none'; }

    function handleSuccessClose() {
        closeSuccessModal();
        window.location.reload();
    }

    confirmCancelBtn?.addEventListener('click', closeConfirmModal);
    confirmBackdrop?.addEventListener('click', closeConfirmModal);
    successCloseBtn?.addEventListener('click', handleSuccessClose);
    successBackdrop?.addEventListener('click', handleSuccessClose);

    function openModal(id: number, name: string, row: HTMLElement, existingNote?: string) {
        activeContactId = id;
        activeRow       = row;
        if (contactName) contactName.textContent = `Contact: ${name}`;

        const msgEl = row.querySelector('.msg-cell') as HTMLElement | null;
        const customerMsgDisplay = document.getElementById('modal-customer-message');
        if (customerMsgDisplay && msgEl) {
            customerMsgDisplay.textContent = msgEl.getAttribute('title') || msgEl.textContent || '';
        }

        if (noteInput) {
            noteInput.value = existingNote || '';
            setTimeout(() => noteInput.focus(), 50);
        }
        if (errorBox) errorBox.style.display = 'none';
        if (submitText) submitText.textContent = existingNote ? 'Update Reply' : 'Mark as Done';
        submitBtn?.removeAttribute('disabled');
        if (modal) modal.style.display = 'flex';
    }

    function closeModal() {
        if (modal) modal.style.display = 'none';
        activeContactId = null;
        activeRow       = null;
    }

    document.addEventListener('click', e => {
        const btn = (e.target as HTMLElement).closest('.btn-done') as HTMLElement | null;
        if (btn) {
            const id   = parseInt(btn.dataset.id ?? '0');
            const name = btn.dataset.name ?? '';
            const row  = btn.closest('tr') as HTMLElement;
            openModal(id, name, row);
        }
    });

    backdrop?.addEventListener('click', closeModal);
    document.getElementById('modal-close')?.addEventListener('click', closeModal);
    document.getElementById('modal-cancel')?.addEventListener('click', closeModal);

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            if (viewModal && viewModal.style.display === 'flex') closeViewModal();
            else closeModal();
        }
    });

    submitBtn?.addEventListener('click', () => {
        if (!activeContactId || !noteInput) return;

        const note = noteInput.value.trim();
        if (!note) {
            if (errorBox) {
                errorBox.textContent = 'Please enter a summary or note before marking as done.';
                errorBox.style.display = 'block';
            }
            noteInput.focus();
            return;
        }

        if (errorBox) errorBox.style.display = 'none';
        openConfirmModal();
    });

    confirmProceedBtn?.addEventListener('click', async () => {
        if (!activeContactId || !noteInput) return;

        closeConfirmModal();
        if (submitText) submitText.textContent = 'Saving…';
        submitBtn?.setAttribute('disabled', 'true');
        if (errorBox) errorBox.style.display = 'none';

        const note = noteInput.value.trim();
        const tokenMatch = document.cookie.match(/admin_token=([^;]+)/);
        const token = tokenMatch ? decodeURIComponent(tokenMatch[1]) : '';

        try {
            const res = await fetch(`http://127.0.0.1:8000/api/admin/contacts/${activeContactId}/complete`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ note }),
            });

            if (!res.ok) throw new Error('Request failed');

            if (activeRow) {
                activeRow.classList.remove('row-pending', 'row-done');
                const pendingBtn = activeRow.querySelector('.btn-status-pending');
                if (pendingBtn) {
                    const doneBadge = document.createElement('span');
                    doneBadge.className = 'btn-status-done';
                    doneBadge.innerHTML = '<i class="fas fa-circle-check"></i> Done';
                    pendingBtn.replaceWith(doneBadge);
                }

                if (activeContactId) {
                    const viewBtn = activeRow.querySelector('.btn-view') as HTMLElement | null;
                    if (viewBtn) viewBtn.dataset.note = note;
                }

                if (note) {
                    const msgCell = activeRow.querySelector('.msg-cell') as HTMLElement | null;
                    if (msgCell) {
                        msgCell.style.webkitLineClamp = 'unset';
                        msgCell.style.overflow = 'visible';
                        const preview = document.createElement('div');
                        preview.className = 'note-preview';
                        preview.innerHTML = `<i class="fas fa-pen-to-square"></i> ${note}`;
                        msgCell.appendChild(preview);
                    }
                }

                const avatar = activeRow.querySelector('[style*="f97316"]') as HTMLElement | null;
                if (avatar) avatar.style.background = 'linear-gradient(135deg,#16a34a,#4ade80)';
            }

            closeModal();
            openSuccessModal();
            setTimeout(() => {
                window.location.reload();
            }, 2500);
        } catch (err) {
            if (errorBox) {
                errorBox.textContent = 'Could not save. Please try again.';
                errorBox.style.display = 'block';
            }
            if (submitText) submitText.textContent = 'Mark as Done';
            submitBtn?.removeAttribute('disabled');
        }
    });

    // ── Stat Cards Ease-Out Deccelerating Count Up Animation ──
    document.querySelectorAll('.stat-val').forEach(el => {
        const targetText = el.getAttribute('data-target') || el.textContent || '0';
        const targetNum = parseInt(targetText.replace(/\D/g, '')) || 0;
        if (targetNum === 0) return;

        let startTime: number | null = null;
        const duration = 1800; // 1.8s count up

        function animateCount(timestamp: number) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(1, elapsed / duration);
            
            // Ease-out cubic formula for slowing down as it approaches final value
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easedProgress * targetNum);

            el.textContent = String(currentVal);

            if (progress < 1) {
                requestAnimationFrame(animateCount);
            } else {
                el.textContent = String(targetNum);
            }
        }

        requestAnimationFrame(animateCount);
    });

    // ── Chart.js Initialization ───────────────────────────
    const rows = Array.from(document.querySelectorAll('#contacts-table tbody tr')) as HTMLElement[];
    let newCount = 0;
    let doneCount = 0;
    const serviceCounts: Record<string, number> = {};
    const dateCounts: Record<string, number> = {};

    rows.forEach(r => {
        const status = r.dataset.status;
        if (status === 'replied' || status === 'closed') doneCount++;
        else newCount++;

        const serviceTd = r.children[5]?.textContent?.trim() || 'General Inquiry';
        const finalService = (serviceTd && serviceTd !== '—') ? serviceTd : 'General Inquiry';
        serviceCounts[finalService] = (serviceCounts[finalService] || 0) + 1;

        const dateTd = r.children[6]?.textContent?.trim() || 'Recent';
        if (dateTd) {
            dateCounts[dateTd] = (dateCounts[dateTd] || 0) + 1;
        }
    });

    // 1. Growth Line Chart (Rich Multi-Stop Blue Shade Gradient)
    const growthCtx = (document.getElementById('growthChart') as HTMLCanvasElement)?.getContext('2d');
    if (growthCtx && (window as any).Chart) {
        const labels = Object.keys(dateCounts).length > 0 ? Object.keys(dateCounts).reverse() : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const data = Object.keys(dateCounts).length > 0 ? Object.values(dateCounts).reverse() : [3, 5, 8, 12, 19, 15, 24];

        const lineGradient = growthCtx.createLinearGradient(0, 0, 0, 260);
        lineGradient.addColorStop(0, 'rgba(0, 113, 227, 0.45)');
        lineGradient.addColorStop(0.5, 'rgba(0, 113, 227, 0.15)');
        lineGradient.addColorStop(1, 'rgba(0, 113, 227, 0.0)');

        // Smooth continuous left-to-right progressive sweep plugin
        const progressiveSweepPlugin = {
            id: 'progressiveSweep',
            beforeDatasetDraw(chart: any) {
                const { ctx, chartArea } = chart;
                const progress = chart._sweepProgress ?? 0;
                ctx.save();
                ctx.beginPath();
                const width = (chartArea.right - chartArea.left) * progress;
                ctx.rect(chartArea.left, chartArea.top - 10, width, chartArea.bottom - chartArea.top + 20);
                ctx.clip();
            },
            afterDatasetDraw(chart: any) {
                chart.ctx.restore();
            }
        };

        const growthChartInstance = new (window as any).Chart(growthCtx, {
            type: 'line',
            data: {
                labels,
                datasets: [{
                    label: 'Incoming Requests',
                    data,
                    borderColor: '#0071e3',
                    backgroundColor: lineGradient,
                    fill: true,
                    tension: 0.45,
                    borderWidth: 3.5,
                    pointBackgroundColor: '#0071e3',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2.5,
                    pointRadius: 6,
                    pointHoverRadius: 9,
                    pointHoverBackgroundColor: '#0071e3',
                    pointHoverBorderColor: '#ffffff',
                    pointHoverBorderWidth: 3
                }]
            },
            plugins: [progressiveSweepPlugin],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: { duration: 0 },
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.03)' }, ticks: { font: { family: '-apple-system, SF Pro Display, sans-serif' } } },
                    x: { grid: { display: false }, ticks: { font: { family: '-apple-system, SF Pro Display, sans-serif' } } }
                }
            }
        });

        // Fluid 60fps progressive left-to-right sweep animation
        let startTime: number | null = null;
        const sweepDuration = 2200; // 2.2 seconds

        function animateSweep(timestamp: number) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(1, elapsed / sweepDuration);
            // Smooth easeOutCubic curve
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            
            growthChartInstance._sweepProgress = easedProgress;
            growthChartInstance.draw();

            if (progress < 1) {
                requestAnimationFrame(animateSweep);
            }
        }

        requestAnimationFrame(animateSweep);
    }

    // 2. Status Doughnut Chart (Apple Rich Radial Shades)
    const statusCtx = (document.getElementById('statusChart') as HTMLCanvasElement)?.getContext('2d');
    if (statusCtx && (window as any).Chart) {
        const orangeGradient = statusCtx.createLinearGradient(0, 0, 0, 200);
        orangeGradient.addColorStop(0, '#ff9500');
        orangeGradient.addColorStop(1, '#ff5e00');

        const greenGradient = statusCtx.createLinearGradient(0, 0, 0, 200);
        greenGradient.addColorStop(0, '#34c759');
        greenGradient.addColorStop(1, '#15803d');

        // Plugin to render centered text in the middle of the doughnut circle hole
        const centerDoughnutTextPlugin = {
            id: 'centerDoughnutText',
            beforeDraw(chart: any) {
                const { ctx, chartArea, data } = chart;
                if (!chartArea) return;
                const activeElements = chart.getActiveElements();
                
                let valueText = '';
                let labelText = '';
                
                if (activeElements.length > 0) {
                    const idx = activeElements[0].index;
                    valueText = String(data.datasets[0].data[idx]);
                    labelText = String(data.labels[idx]);
                } else {
                    const total = data.datasets[0].data.reduce((a: number, b: number) => a + b, 0);
                    valueText = String(total);
                    labelText = 'Total';
                }

                ctx.save();
                const centerX = (chartArea.left + chartArea.right) / 2;
                const centerY = (chartArea.top + chartArea.bottom) / 2;

                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                // Render Big Value Number
                ctx.font = '800 28px -apple-system, SF Pro Display, sans-serif';
                ctx.fillStyle = '#1d1d1f';
                ctx.fillText(valueText, centerX, centerY - 8);

                // Render Sub Label Text
                ctx.font = '600 11px -apple-system, SF Pro Display, sans-serif';
                ctx.fillStyle = '#86868b';
                ctx.fillText(labelText, centerX, centerY + 16);

                ctx.restore();
            }
        };

        new (window as any).Chart(statusCtx, {
            type: 'doughnut',
            data: {
                labels: ['Pending / New', 'Done / Replied'],
                datasets: [{
                    data: [newCount || 4, doneCount || 6],
                    backgroundColor: [orangeGradient, greenGradient],
                    borderWidth: 4,
                    borderColor: '#ffffff',
                    hoverBorderWidth: 6,
                    hoverBorderColor: '#ffffff',
                    hoverOffset: 12,
                    borderRadius: 8,
                    spacing: 4
                }]
            },
            plugins: [centerDoughnutTextPlugin],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        align: 'start',
                        labels: {
                            padding: 16,
                            font: { size: 12, family: '-apple-system, SF Pro Display, sans-serif', weight: '600' }
                        }
                    },
                    tooltip: {
                        enabled: true,
                        titleAlign: 'center',
                        bodyAlign: 'center',
                        footerAlign: 'center',
                        xAlign: 'center',
                        yAlign: 'center',
                        padding: 12,
                        cornerRadius: 12,
                        callbacks: {
                            label(context: any) {
                                return ` ${context.raw} Submissions`;
                            }
                        }
                    }
                },
                cutout: '72%'
            }
        });
    }

    // 3. Services Bar Chart (Apple Vertical 3D Shaded Columns)
    const servicesCtx = (document.getElementById('servicesChart') as HTMLCanvasElement)?.getContext('2d');
    if (servicesCtx && (window as any).Chart) {
        const serviceLabels = Object.keys(serviceCounts).length > 0 
            ? Object.keys(serviceCounts) 
            : ['POS System', 'Enterprise ERP', 'School Mgmt', 'Mobile Apps', 'E-commerce', 'Accounts'];
        const serviceData = Object.keys(serviceCounts).length > 0 
            ? Object.values(serviceCounts) 
            : [12, 19, 7, 15, 10, 8];

        // Continuous spectrum palette across all bars: bar[i] blends from color[i] -> color[i+1]
        const spectrumPalette = [
            '#0071e3', // 0: Apple Blue
            '#3b82f6', // 1: Bright Blue
            '#6366f1', // 2: Indigo
            '#8b5cf6', // 3: Purple
            '#a855f7', // 4: Deep Purple
            '#d946ef', // 5: Magenta
            '#ec4899', // 6: Pink
            '#f43f5e', // 7: Rose
            '#ff6b00', // 8: Orange
            '#eab308', // 9: Amber
            '#06b6d4', // 10: Cyan
            '#14b8a6', // 11: Teal
            '#10b981', // 12: Emerald
            '#34c759', // 13: Mint Green
            '#4ade80'  // 14: Light Green
        ];

        function getSpectrumColor(t: number): string {
            const maxIdx = spectrumPalette.length - 1;
            const pos = t * maxIdx;
            const idx = Math.floor(pos);
            if (idx >= maxIdx) return spectrumPalette[maxIdx];
            return spectrumPalette[idx];
        }

        const barGradients = serviceLabels.map((_, index, arr) => {
            const grad = servicesCtx.createLinearGradient(0, 0, 0, 240);
            const numBars = Math.max(1, arr.length);
            const startRatio = index / numBars;
            const endRatio = (index + 1) / numBars;

            const startColor = getSpectrumColor(startRatio);
            const endColor = getSpectrumColor(endRatio);

            grad.addColorStop(0, startColor);
            grad.addColorStop(1, endColor);
            return grad;
        });

        // Smooth continuous bottom-to-top progressive sweep plugin for bar chart
        const progressiveBarSweepPlugin = {
            id: 'progressiveBarSweep',
            beforeDatasetDraw(chart: any) {
                const { ctx, chartArea } = chart;
                const progress = chart._barSweepProgress ?? 0;
                ctx.save();
                ctx.beginPath();
                const totalHeight = chartArea.bottom - chartArea.top;
                const visibleHeight = totalHeight * progress;
                const topY = chartArea.bottom - visibleHeight;
                ctx.rect(chartArea.left - 10, topY, (chartArea.right - chartArea.left) + 20, visibleHeight + 10);
                ctx.clip();
            },
            afterDatasetDraw(chart: any) {
                chart.ctx.restore();
            }
        };

        const servicesChartInstance = new (window as any).Chart(servicesCtx, {
            type: 'bar',
            data: {
                labels: serviceLabels,
                datasets: [{
                    label: 'Submissions',
                    data: serviceData,
                    backgroundColor: barGradients,
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                    borderWidth: 1.5,
                    borderRadius: { topLeft: 14, topRight: 14, bottomLeft: 4, bottomRight: 4 },
                    barThickness: 28
                }]
            },
            plugins: [progressiveBarSweepPlugin],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: { duration: 0 },
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.03)' }, ticks: { font: { family: '-apple-system, SF Pro Display, sans-serif' } } },
                    x: { grid: { display: false }, ticks: { font: { family: '-apple-system, SF Pro Display, sans-serif' } } }
                }
            }
        });

        // Fluid 60fps progressive bottom-to-top sweep animation
        let barStartTime: number | null = null;
        const barSweepDuration = 2200; // 2.2 seconds

        function animateBarSweep(timestamp: number) {
            if (!barStartTime) barStartTime = timestamp;
            const elapsed = timestamp - barStartTime;
            const progress = Math.min(1, elapsed / barSweepDuration);
            // Smooth easeOutCubic curve
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            
            servicesChartInstance._barSweepProgress = easedProgress;
            servicesChartInstance.draw();

            if (progress < 1) {
                requestAnimationFrame(animateBarSweep);
            }
        }

        requestAnimationFrame(animateBarSweep);
    }
});
