let word1= "Madam";

let word2 = "";


        for (let i = word1.length - 1; i >= 0; i--) {
            word2 += word1.charAt(i);

        }
        let isPalindrome= (word1.toLowerCase===word2.toLowerCase);

        console.log(isPalindrome);