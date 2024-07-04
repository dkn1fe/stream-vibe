export const getRandomNumber = () => {
      let firstId = Math.floor(Math.random() * 100 + 300);
      let secondId = Math.floor(Math.random() * 100 + 300);
      let thirdId = Math.floor(Math.random() * 100 + 300);
      let fourthId = Math.floor(Math.random() * 100 + 300);
      const randomNumberArray = [firstId, secondId, thirdId, fourthId];
      return randomNumberArray
}

export const getZero = (num:number) => {
      return num < 10 ? `0${num}`: num;
}