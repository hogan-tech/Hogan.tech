#include <stdio.h>

void swap(int a, int b) {
  b = a;
  printf("%d %d", a, b);
}
int main() {
  int a = 1;
  int b = 0;
  b = a;
  swap(a, b);
  printf("%d", a);  // a = number 110
  printf("%d", b);  // b = number 120
  return 0;
}