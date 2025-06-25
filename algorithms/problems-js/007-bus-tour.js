/**
 * На экскурсионном маршруте автобусу высотой 512 см встречаются несколько мостов.
 *
 * Напишите функцию checkBusTour(bridges) вычисляющую номер моста под которым не сможет проехать автобус.
 *
 * Пример:
 *
 * checkBusTour([600, 512]) === 2
 * checkBusTour([600, 1024]) === undefined  # Автобус успешно проедет по маршруту
 *
 * @param {number[]} bridges высоты мостов встречающихся на маршруте
 * @returns {undefined|number}
 */

const busTour = 512;
function checkBusTour(bridges) {
  let indexOf = undefined;
  for (let i = 0; i < bridges.length; i++) {
    if (bridges[i] === busTour) {
      indexOf = ++i;
    } else {
      indexOf = undefined;
    }
  }

  return indexOf;
}
console.log(checkBusTour([600, 512])); // 2
console.log(checkBusTour([600, 1024])); // undefined
