import { ERROR_MSG, LOTTO_NUMBER_RANGE } from '../Constants.js';
import { checkDuplicate, checkRange } from '../Util.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateCount(numbers);
    this.validateRange(numbers);
    this.validateDuplicate(numbers);

    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  #validateCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MSG.invalidNumberCount);
    }
  }

  validateRange(numbers) {
    numbers.forEach((number) => {
      if (checkRange(number, LOTTO_NUMBER_RANGE.min, LOTTO_NUMBER_RANGE.max)) {
        throw Error(ERROR_MSG.outOfLottoRange);
      }
    });
  }

  validateDuplicate(numbers) {
    if (checkDuplicate(numbers)) {
      throw Error(ERROR_MSG.duplicateNumber);
    }
  }

  // TODO: 추가 기능 구현
}
export default Lotto;
