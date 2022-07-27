#include <stdio.h>

int f(int n){
    if (n==1 || n==2){
        return 1;
    }else{
        return f(n-1)+f(n-2);
    }
}
int main() {
    //快速印出費氏數列第四個數字
    printf("%d",f(4));
    return 0;
}