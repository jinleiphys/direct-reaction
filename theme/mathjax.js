window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true
    },
    startup: {
        pageReady: function () {
            console.log("MathJax is loaded and ready!");
            return MathJax.startup.defaultPageReady();
        }
    }
};