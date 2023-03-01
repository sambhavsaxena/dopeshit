{

	// Place your snippets for cpp here. Each snippet is defined under a snippet name and has a prefix, body and	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:

	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the

	// same ids are connected.

	// Example:

	"Basic code": {

		"prefix": "code",

		"body": [

			"#include <bits/stdc++.h>",

			"using namespace std;\n",

			"int main()",

			"{",

			"\t$1",

			"\treturn 0;",

			"}\n"

		],

		"description": "Log output to console"

	},

	"Ternary print statement": {

		"prefix": "terp",

		"body": [

			"$1 ? cout<<\"$2\"<<endl : cout<<\"$3\"<<endl;",

		],

		"description": "Log output to console"

	},

	"Sieve": {

		"prefix": "sieve",

		"body": [

			"vector<ll> sieve(ll n) // sieve of primes",

			"{",

			"\tvector<bool> prime(n + 1, true);",

			"\tvector<ll> primes;",

			"\tfor (ll p = 2; p * p <= n; p++)",

			"\t{",

			"\t\tif (prime[p])",

			"\t\t{",

			"\t\t\tfor (ll i = p * 2; i <= n; i += p)",

			"\t\t\t{",

			"\t\t\t\tprime[i] = false;",

			"\t\t\t}",

			"\t\t}",

			"\t}",

			"\tfor (ll p = 2; p <= n; p++)",

			"\t{",

			"\t\tif (prime[p])",

			"\t\t{",

			"\t\t\tprimes.push_back(p);",

			"\t\t}",

			"\t}",

			"\treturn primes;",

			"}\n"

		],

		"description": "Get primes till n"

	},

	"Palindrome": {

		"prefix": "palindrome",

		"body": [

			"bool palindrome(string &s)",

			"{",

			"\tstring t = s;",

			"\treverse(all(t));",

			"\treturn t == s;",

			"}\n"

		],

		"description": "check palindrome"

	},

	"Default Input Vector": {

		"prefix": "definv",

		"body": [

			"ll n;",

			"cin>>n;",

			"vl v(n);",

			"loopx cin>>v[i];"

		],

		"description": "default input vector"

	},

	"Prefix Sum": {

		"prefix": "prefixsum",

		"body": [

			"vl prefixsum(vl &v)",

			"{",

			"\tvl p(v.size());",

			"\tp[0] = v[0];",

			"\tfor (ll i = 1; i < v.size(); i++)",

			"\t{",

			"\t\tp[i] = p[i - 1] + v[i];",

			"\t}",

			"\treturn p;",

			"}\n"

		],

		"description": "prefix sum"

	},

	"Max repeating Element": {

		"prefix": "mre",

		"body": [

			"ll mre(vector<ll> &a)",

			"{",

			"\nll n = a.size(), max = 0, id = -1;",

			"\tloop(i, 0, n)",

			"\t{",

			"\t\ta[a[i] % n] += n;",

			"\t}",

			"\tloop(i, 0, n)",

			"\t{",

			"\t\tif(a[i] / n > max)",

			"\t\t{",

			"\t\t\tmax = a[i] / n;",

			"\t\t\tid = i;",

			"\t\t}",

			"\t}",

			"\treturn id;",

			"}\n",

		],

		"description": "returns the maximum repeating element"

	},

	"Bitmask": {

		"prefix": "bitmask",

		"body": [

			"int setbit(int n, int pos)",

			"{",

			"\treturn n | (1<<pos);",

			"}",

			"int clearbit(int n, int pos)",

			"{",

			"\treturn n & ~(1<<pos);",

			"}",

			"int togglebit(int n, int pos)",

			"{",

			"\treturn n ^ (1<<pos);",

			"}",

			"bool checkbit(int n, int pos)",

			"{",

			"\treturn n & (1<<pos);",

			"}\n"

		],

		"description": "bit operations"

	},

	"Longest increasing subsequence": {

		"prefix": "lis",

		"body": [

			"ll lis(vector<ll> &a)",

			"{",

			"\tll n = a.size();",

			"\tvector<ll> dp(n, 1);",

			"\tfor(ll i = 1; i < n; i++)",

			"\t{",

			"\t\tfor(ll j = 0; j < i; j++)",

			"\t\t{",

			"\t\t\tif(a[i] > a[j])",

			"\t\t\t{",

			"\t\t\t\tdp[i] = max(dp[i], dp[j] + 1);",

			"\t\t\t}",

			"\t\t}",

			"\t}",

			"\treturn *max_element(all(dp));",

			"}\n"

		],

		"description": "longest increasing subsequence"

	},

	"Binary Search on Vector": {

		"prefix": "bins",

		"body": [

			"ll binarysearch(vector<ll> &a, ll x)",

			"{",

			"\tll n = a.size();",

			"\tll l = 0, r = n - 1;",

			"\twhile(l <= r)",

			"\t{",

			"\t\tll mid = l + (r - l) / 2",

			"\t\tif(a[mid] == x)",

			"\t\t{",

			"\t\t\treturn mid;",

			"\t\t}",

			"\t\telse if(a[mid] < x)",

			"\t\t{",

			"\t\t\tl = mid + 1;",

			"\t\t}",

			"\t\telse",

			"\t\t{",

			"\t\t\tr = mid - 1;",

			"\t\t}",

			"\t}",

			"\treturn -1;",

			"}\n"

		],

		"description": "binary search over vectors"

	},

	"Problem template": {

		"prefix": "cpp",

		"body": [

			"//Author: Sambhav Saxena\n",

			"/*\n",

			" ------------------------FOR TLE------------------------\n",

			"MAX value of N                    Time complexity",

			"10^9                              O(logN) or sqrt(N)",

			"10^8                              O(N) Edge fit",

			"10^7                              O(N) Partial fit",

			"10^6                              O(N) Best fit",

			"10^5                              O(NlogN)",

			"10^4                              O(N ^ 2)",

			"10^2                              O(N ^ 3)",

			"<= 160                            O(N ^ 4)",

			"<= 18                             O(2 ^ N * N ^ 2)",

			"<= 10                             O(N!), O(2 ^ N)",

			"Upper Case                        65 - 90",

			"Lower Case                        97 - 122",

			"Numbers                           48 - 57\n",

			"*/\n",

			"// ------------------------DEFINITIONS & INCLUSIONS------------------------\n",

			"#include<bits/stdc++.h>",
