/* rem适配 - 动态设置根字体大小 */
(function () {
	function autoRootFontSize() {
		document.documentElement.style.fontSize = Math.min(screen.width, document.documentElement.getBoundingClientRect().width) / 750 * 32 + 'px';
		// 取screen.width和document.documentElement.getBoundingClientRect().width的最小值；
		// 除以750，乘以32；就是原本是750大小的32px; 如果屏幕大小变成了375px, 那么字体就是16px;
		// 也就是根字体fontSize大小和屏幕大小成正比变化
	}

	window.addEventListener('resize', autoRootFontSize);
	autoRootFontSize();
})();
