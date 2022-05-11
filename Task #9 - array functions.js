const values = [1, 'a', 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];

values.filter(el => el < 100 && typeof(el) === 'number')