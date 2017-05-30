import java.util.Scanner;
import java.lang.Math;

public class Main {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int[] h = new int[26];
        for(int h_i=0; h_i < 26; h_i++){
            h[h_i] = in.nextInt();
        }
        String word = in.next();
        int rect_height = 0;
        for(int i = 0; i < word.length(); i++){
          rect_height = Math.max(rect_height, h[(int)word.charAt(i) - (int)'a']);
        }
        int ans = rect_height * word.length();
        System.out.println(ans);
    }
}