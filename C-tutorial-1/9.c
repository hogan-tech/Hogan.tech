#include <stdio.h>

int main() {
  int score = 100;
  // 1. if 敘述
  if (score < 60) {
    printf("分數低於六十分");
  }
  // 2. if...else 敘述
  if (score < 80) {
    printf("分數低於八十分");
  } else {
    printf("分數大於或等於八十分");
  }

  // 3. 巢狀 if 敘述
  if (score > 80) {
    printf("分數大於八十分");
    if (score == 100) {
      printf("分數等於一百分");
    }
  }
  // 4. if...else if...else 敘述
  if (score < 80) {
    printf("分數低於八十分");
  } else if (score < 90) {
    printf("分數大於八十分，但是小於九十分");
  } else {
    printf("分數大於九十分");
  }
  return 0;
}