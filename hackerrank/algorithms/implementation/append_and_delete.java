import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String s = in.next();
        String t = in.next();
        int k = in.nextInt();


        int commonLength = 0;
        
        for(int i = 0; i < java.lang.Math.min(s.length(), t.length()); i++){
            if(s.charAt(i) == t.charAt(i))
              commonLength++;
            else
                break;
        }
        // Case 1
        if ((s.length() + t.length() - 2*commonLength)>k){
          System.out.println("No");
        }
        // Case 2
        else if ((s.length() + t.length() - 2*commonLength)%2 ==k%2){
          System.out.println("Yes");
        }
        // Case 3
        else if ((s.length() + t.length()-k)<0){
          System.out.println("Yes");
        }
        // Case 4
        else {
          System.out.println("No");
        }        
    }
}
