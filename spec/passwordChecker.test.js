import { Main } from "../src/passwordChecker.js";

describe("all methode", () => {
  const main = new Main();

    it("should return true", function () {
      // act
      let result = true
      // assert
      expect(result).toBe(true); 
    });

    // 1)	La fonction doit vérifier qu’une chaine de caractère est bien un mot de passe valide :
    //Il doit contenir au moins 8 charactères.

    it("should return false if password is less than 8 characters", () => {
      // arrange
      let password = "1234567";
      // act
      let result = main.isPasswordValid(password);
      // assert
      expect(result).toBe(false);
    });

    it("should return false if password is less than 8 characters", () => {
      // arrange
      let password = "2345678";
      // act
      let result = main.isPasswordLength(password);
      // assert
      expect(result).toBe(false);
    });


    // Doit contenir au moins un charactère spécial
    it("should return false if password does not contain a special character", () => {
      // arrange
      let password = "12345678";
      // act
      let result = main.isPasswordSpecialCharacter(password);
      // assert
      expect(result).toBe(false);
    });

      // Doit contenir au moins un charactère spécial
      it("should return false if password does not contain a special character", () => {
        // arrange
        let password = "12345678";
        // act
        let result = main.isPasswordSpecialCharacter(password);
        // assert
        expect(result).toBe(false);
      });

      // c.	Il doit contenir au moins un chiffre.
      it("should return false if password does not contain a number", () => {
        // arrange
        let password = "abcdefgh";
        // act
        let result = main.isPasswordNumber(password);
        // assert
        expect(result).toBe(false);
      });


      // d.	Il ne peut pas contenir la chaine de caractère « IPL » quel que soit sa casse (majuscule ou minuscule).
      it("should return false if password contains IPL", () => {
        // arrange
        let password = "IPL12345";
        // act
        let result = main.isPasswordIPL(password);
        // assert
        expect(result).toBe(false);
      });


});