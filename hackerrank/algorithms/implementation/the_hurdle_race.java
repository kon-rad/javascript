import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static int getMinimumBevereges(int[] height, int k){
        Arrays.sort(height);
        int difference = height[height.length - 1] - k;
        return (difference < 0) ? 0 : difference;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int k = in.nextInt();
        int[] height = new int[n];
        for(int height_i=0; height_i < n; height_i++){
            height[height_i] = in.nextInt();
        }
        // your code goes here
        in.close();
        System.out.println(getMinimumBevereges(height, k));
    }
}
