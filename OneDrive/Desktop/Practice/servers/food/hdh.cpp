#include <bits/stdc++.h>
using namespace std;
int main()
{
int t;
cin>>t;
while(t--)
{
int n,q;
cin>>n>>q;
vector<int> v(n,0);
deque<int> dq,dq1;
for(int i=0;i<n;i++){
    cin>>v[i];
    dq.push_back(v[i]);
    dq1.push_back(v[i]);
}
dq1=dq;
// for(auto it:dq1){
//     cout<<it<<" ";
//    }
//    cout<<endl;
vector<pair<int,int>> p;
int ml=-1;
vector<int> ans;
for(int i=0;i<q;i++){
    int j,k;
    cin>>j>>k;
    // ml=max(ml,k);
    // p.push_back({j,k});
    int wins=0;
    for(int i=0;i<k;i++){
      int f=dq.front();
      dq.pop_front();
      int r=dq.front();
      dq.pop_front();
      if(f>r){
        dq.push_front(f);
        dq.push_back(r);
        if(f==j) wins++;
      }
      if(r<f){
        dq.push_front(r);
        dq.push_back(f);
        if(r==j) wins++;
      }
    }
    ans.push_back(wins);
   dq=dq1;
}

for(int i=0;i<q;i++){
    cout<<ans[i]<<endl;
}


}
return 0;
}