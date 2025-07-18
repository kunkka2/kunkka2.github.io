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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="calendar.html">Calendar</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.</strong> YEAR 2025</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="2025/08-Test-TestCase-LRUCacheTestCase.html"><strong aria-hidden="true">1.1.</strong> 2025-08-Test TestCase(LRUCacheTestCase)</a></li><li class="chapter-item expanded "><a href="2025/07-Sieve-of-Eratothenes.html"><strong aria-hidden="true">1.2.</strong> 2025-07-Prime Number Generator (Sieve of Eratosthenes)</a></li><li class="chapter-item expanded "><a href="2025/06-find-pattern-occurrences.html"><strong aria-hidden="true">1.3.</strong> 2025-06-find-pattern-occurrences</a></li><li class="chapter-item expanded "><a href="2025/05-find-missing-number.html"><strong aria-hidden="true">1.4.</strong> 2025-05-find-missing-number</a></li><li class="chapter-item expanded "><a href="2025/04-find-most-frequent.html"><strong aria-hidden="true">1.5.</strong> 2025-04-find-most-frequent</a></li><li class="chapter-item expanded "><a href="2025/03-quicksort.html"><strong aria-hidden="true">1.6.</strong> 2025-03-quicksort</a></li><li class="chapter-item expanded "><a href="2025/02-greedy.html"><strong aria-hidden="true">1.7.</strong> 2025-02-greedy</a></li><li class="chapter-item expanded "><a href="2025/01-Derivative.html"><strong aria-hidden="true">1.8.</strong> 2025-01-derivative</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.</strong> YEAR 2024</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="2024/12-Power-Operation.html"><strong aria-hidden="true">2.1.</strong> 2024-12-Power-Operation</a></li><li class="chapter-item expanded "><a href="2024/11-Hash-table.html"><strong aria-hidden="true">2.2.</strong> 2024-11-Hash-Table</a></li><li class="chapter-item expanded "><a href="2024/10-BucketSort-or-BinSort.html"><strong aria-hidden="true">2.3.</strong> 2024-10-Bucket Sort Or Bin Sort</a></li><li class="chapter-item expanded "><a href="2024/09-Encrypt-Decrypt.html"><strong aria-hidden="true">2.4.</strong> 2024-09-Encrypt-Decrypt</a></li><li class="chapter-item expanded "><a href="2024/08-Table-of-prime-factors.html"><strong aria-hidden="true">2.5.</strong> 2024-08-Table of prime factors</a></li><li class="chapter-item expanded "><a href="2024/07-Bellman-Ford-Algorithm.html"><strong aria-hidden="true">2.6.</strong> 2024-07-Bellman Ford Algorithm(find the shortest path or cycle)</a></li><li class="chapter-item expanded "><a href="2024/06-Dijkstra-algorithm.html"><strong aria-hidden="true">2.7.</strong> 2024-06-Dijkstra&#39;s Algorithm(find the shortest path)</a></li><li class="chapter-item expanded "><a href="2024/05-graph-is-cyclic.html"><strong aria-hidden="true">2.8.</strong> 2024-05-Graph is cyclic (Dose graph contains a cycle)</a></li><li class="chapter-item expanded "><a href="2024/04-cross-product.html"><strong aria-hidden="true">2.9.</strong> 2024-04-Cross Product(Dimension 3)</a></li><li class="chapter-item expanded "><a href="2024/03-point-line-distance.html"><strong aria-hidden="true">2.10.</strong> 2024-03-Point Line Distance(Dimension 3)</a></li><li class="chapter-item expanded "><a href="2024/02-depth-first-search.html"><strong aria-hidden="true">2.11.</strong> 2024-02-Depth First Search(DFS)</a></li><li class="chapter-item expanded "><a href="2024/01-breadth-first-search.html"><strong aria-hidden="true">2.12.</strong> 2024-01-Breadth First Search(BFS)</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> YEAR 2023</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="2023/12-AvlTree-Add-Node.html"><strong aria-hidden="true">3.1.</strong> 2023-12-Avl Tree Add Node</a></li><li class="chapter-item expanded "><a href="2023/11-AvlTree-Right-Left-Rotations.html"><strong aria-hidden="true">3.2.</strong> 2023-11-Avl Tree Right Left Rotations</a></li><li class="chapter-item expanded "><a href="2023/10-AvlTree-Left-Left-Rotations.html"><strong aria-hidden="true">3.3.</strong> 2023-10-Avl Tree Left Left Rotations</a></li><li class="chapter-item expanded "><a href="2023/09-AvlTree-Right-Right-rotations.html"><strong aria-hidden="true">3.4.</strong> 2023-09-Avl Tree Right Right Rotations</a></li><li class="chapter-item expanded "><a href="2023/08-AvlTree-Depth-of-nodes.html"><strong aria-hidden="true">3.5.</strong> 2023-08-Avl Tree Depth of notes</a></li><li class="chapter-item expanded "><a href="2023/07-Evaluation-of-Postfix-Expression.html"><strong aria-hidden="true">3.6.</strong> 2023-07-Evaluation of Postfix Expression</a></li><li class="chapter-item expanded "><a href="2023/06-Tree-find-Successor.html"><strong aria-hidden="true">3.7.</strong> 2023-06-Tree find Successor</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> YEAR 2022</div></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> DEDICATED</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="dedicated/simple_demo_from_ai.html"><strong aria-hidden="true">5.1.</strong> Simple Demo From Ai</a></li><li class="chapter-item expanded "><a href="dedicated/simple_demo_20250605.html"><strong aria-hidden="true">5.2.</strong> Simple Demo 2025-06-05</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> Demo</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="demos/tools.html"><strong aria-hidden="true">6.1.</strong> Simple - tools.py</a></li></ol></li><li class="chapter-item expanded "><a href="about.html"><strong aria-hidden="true">7.</strong> About</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
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
