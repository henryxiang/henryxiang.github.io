// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="data-structures/intro.html"><strong aria-hidden="true">1.</strong> Data Structures</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="data-structures/linked-list.html"><strong aria-hidden="true">1.1.</strong> Linked List</a></li><li class="chapter-item "><a href="data-structures/disjoint-set-1.html"><strong aria-hidden="true">1.2.</strong> Disjoint Set (Union Find) 1</a></li><li class="chapter-item "><a href="data-structures/disjoint-set-2.html"><strong aria-hidden="true">1.3.</strong> Disjoint Set (Union Find) 2</a></li><li class="chapter-item "><a href="data-structures/trie.html"><strong aria-hidden="true">1.4.</strong> Trie (Prefix Tree)</a></li></ol></li><li class="chapter-item "><a href="binary-number/intro.html"><strong aria-hidden="true">2.</strong> Binary Number and Bitwize Operations</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="binary-number/bitwise-operation-problems-1.html"><strong aria-hidden="true">2.1.</strong> XOR Operation Problems</a></li><li class="chapter-item "><a href="binary-number/bitwise-operation-problems-1.html"><strong aria-hidden="true">2.2.</strong> Bitwise Operation Problems</a></li><li class="chapter-item "><a href="binary-number/bitset-and-bitmap.html"><strong aria-hidden="true">2.3.</strong> Bitset and Bitmap</a></li><li class="chapter-item "><a href="binary-number/implementing-arithmetic-operations.html"><strong aria-hidden="true">2.4.</strong> Implementing Arithmetic Operations</a></li></ol></li><li class="chapter-item "><a href="dynamic-programming/intro.html"><strong aria-hidden="true">3.</strong> Dynamic Programming</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="dynamic-programming/1d-dp.html"><strong aria-hidden="true">3.1.</strong> One-Dimensional DP Problems</a></li><li class="chapter-item "><a href="dynamic-programming/2d-dp-1.html"><strong aria-hidden="true">3.2.</strong> Two-Dimensional DP Problems 1</a></li><li class="chapter-item "><a href="dynamic-programming/2d-dp-2.html"><strong aria-hidden="true">3.3.</strong> Two-Dimensional DP Problems 2</a></li><li class="chapter-item "><a href="dynamic-programming/largest-subarray-sum-1.html"><strong aria-hidden="true">3.4.</strong> Largest Subarray Sum and the Related Problems 1</a></li><li class="chapter-item "><a href="dynamic-programming/largest-subarray-sum-2.html"><strong aria-hidden="true">3.5.</strong> Largest Subarray Sum and the Related Problems 2</a></li><li class="chapter-item "><a href="dynamic-programming/interval-dp-1.html"><strong aria-hidden="true">3.6.</strong> DP on Intervals 1</a></li><li class="chapter-item "><a href="dynamic-programming/interval-dp-2.html"><strong aria-hidden="true">3.7.</strong> DP on Intervals 2</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
