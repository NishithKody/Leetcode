class Solution:
    def reverseWords(self, s: str) -> str:
        a = s.split(' ')
        res = []
        for i in a:
            t = i[::-1]
            # print(t)
            res.append(t)
        
        return " ".join(res)
