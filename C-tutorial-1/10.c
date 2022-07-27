#include <stdio.h>

int main() {
  int score = 10;
  switch (score) {
    case (60):
      printf("分數60分");
      break;
    case (70):
      printf("分數70分");
      break;
    case (80):
      printf("分數80分");
      break;
    default:
      printf("其餘的分數");
      break;
  }
  return 0;
}