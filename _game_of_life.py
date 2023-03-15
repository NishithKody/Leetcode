class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """

        n = len(board)
        m = len(board[0])
        temp = [0]*n
        for i in range(n):
            temp[i] = [0]*m

        for i in range(0,n):
            for j in range(0,m):
                count = 0
                # top
                if(i-1>=0 and board[i-1][j]==1):
                    count = count +1
                #left
                if(j-1>=0 and board[i][j-1]==1):
                    count = count +1
                #top left
                if(i-1>=0 and j-1>=0 and board[i-1][j-1]==1):
                    count = count +1
                
                
                # bottom
                if(i+1<n and board[i+1][j]==1):
                    count = count +1
                #right
                if(j+1<m and board[i][j+1]==1):
                    count = count +1
                
                #bottom right
                if(i+1<n and j+1<m and board[i+1][j+1]==1):
                    count=count+1
                
                #top right
                if(i-1>=0 and j+1<m and board[i-1][j+1]==1):
                    count = count+1
                
                #bottom left
                if(i+1<n and j-1>=0 and board[i+1][j-1]==1):
                    count = count+1
                
                
                if(board[i][j]==1):
                    if(count<2):
                        temp[i][j]=0
                    if(count == 2 or count ==3):
                        temp[i][j]=1
                    if(count>3):
                        temp[i][j]=0
                if(board[i][j]==0):
                    if(count==3):
                        temp[i][j]=1
                    else:
                        temp[i][j]=0
                
                

        board=temp
        print(board)
                    
                    
