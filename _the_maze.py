from typing import (
    List,
)

class Solution:
    """
    @param maze: the maze
    @param start: the start
    @param destination: the destination
    @return: whether the ball could stop at the destination
    """
    def has_path(self, maze: List[List[int]], start: List[int], destination: List[int]) -> bool:
        # write your code here
        direction = [(0,1), (1,0),(-1,0),(0,-1)]
        visited = set()
        q = []
        q.append((start[0],start[1]))
        visited.add((start[0],start[1]))

        m = len(maze)
        n = len(maze[0])

        while q:
            cur_i, cur_j = q.pop()

            for d in direction:
                new_i = cur_i
                new_j = cur_j

                while 0<=new_i<m and 0<=new_j<n and maze[new_i][new_j]==0:
                    new_i = new_i + d[0]
                    new_j = new_j + d[1]

                new_i = new_i - d[0]
                new_j = new_j - d[1] 

                if(new_i == destination[0] and new_j == destination[1]):
                    return True
                
                if(new_i,new_j) not in visited:
                    visited.add((new_i,new_j))
                    q.append((new_i,new_j))
        
        return False

        
