'use strict'

window.getMessage = function (a, b) {
	if (typeof a === 'boolean') {
		if (a) {
			return 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
		return 'Переданное GIF-изображение не анимировано';
	if (typeof a === 'number') {
		return 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + (b * 4) + ' атрибутов';
	}
	if (Array.isArray(a)) {
		var amountofRedPoints = 0;
		for (var i = 0; i < a.length; i++) {
			amountofRedPoints += a[i];
		}
		return 'Количество красных точек во всех строчках изображения :' + amountofRedPoints;
	}
	if (Array.isArray(a) && Array.isArray(b)) {
		var artifactsSquare = 0;
		for (i < a.length; i++) {
			artifactsSquare += a[i] * b[i];
		}	
		return 'Общая площадь артефактов сжатия : '+ artifactsSquare + 'пикселей';
	}
	return 'Переданы некорректные данные';
	}
