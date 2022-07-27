#include <stdlib.h>
#include <time.h>
srand((unsigned)time(NULL));

int main() {
  int a = 10;
  int b = 20;
  int num = a + rand() % b;

  return 0;
}