
3번은 return 0; 해서 얻어먹자!!

## Testcase
- "zaabbd" -> ["z","d"];
- "abc" -> ["abc"]


## EX code


#include <iostream>
#include <string>
#include <vector>

using namespace std;

int solution(string s) {

    int num = s.length();
    int btn = 0;
    
    for(int i = 0; i < num; i++) {
        
        for(int j = i+1; j < num; j++) {
            
            if( s[i] == s[j] ) {
                
                s[j] = NULL;                                  
                btn = 1;
                
                
                //printf("%d %d\n",i,j);
            }
            
        }
        
        if (btn == 1) {
            s[i] = NULL;
            btn = 0;
        }
        
        
    }
    
    cout << s;
    
}






