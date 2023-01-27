package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println(isPalindrome("malam"))
	fmt.Print(myPalindrom(("katak")))
	r,m :="go","bo"
	fmt.Println(r+" "+m)
}

func isPalindrome(str string) bool {
	reversedStr := ""
	for i := len(str) - 1; i >= 0; i-- {
		reversedStr += string(str[i])
	}
	for i := range str {
		if str[i] != reversedStr[i] {
			return false
		}
	}
	return true
}

func myPalindrom(str string) bool {
	temp:=0
	for i := 0; i < len(str); i++ {
		if str[i]!=str[len(str)-1-i]{
			temp++
		}
		
	}
	if temp>0 {
		return false
	}
	return true
}

func Palindrome(s string) bool {
    // Hapus spasi dan ubah huruf kecil
    s = strings.ToLower(strings.Replace(s, " ", "", -1))

    // Inisialisasi pointer kiri dan kanan
    left := 0
    right := len(s) - 1

    // Periksa karakter dari kiri dan kanan sampai pointer bertemu
    for left < right {
        if s[left] != s[right] {
            return false
        }
        left++
        right--
    }

    return true
}



