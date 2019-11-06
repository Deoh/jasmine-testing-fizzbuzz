describe("Fizz Buzz", function() {
    
    beforeEach(function() {
        fizz = new fizzBuzz();
    });
    
    describe("Checks a number", function() {
        it("should return an error if a number is not entered", function() {
            expect(fizzBuzz("string")).toBe("Error!")
        });
        it("should return FizzBuzz if a number is divisible by 3 and 5", function() {
            expect(fizzBuzz(15)).toBe("FizzBuzz")
        });
        it("should return Fizz if a number is divisible by 3", function() {
            expect(fizzBuzz(18)).toBe("Fizz")
        });
        it("should return Fizz if a number is divisible by 3", function() {
            expect(fizzBuzz(20)).toBe("Buzz")
        });
        it("should return the number if not divisible by 3 and 5", function() {
            expect(fizzBuzz(16)).toBe(16)
        });
    });
})