let a = ['to','be','that','of','elon','to','this','now','back','cool','hey','love','of','life','that','rain','summer','color','now','of','hat','late','sorry','my','team'];
const count = {};
for (let i=0; i<a.length; i++)
{
    let s = a[i].split(',');
    if(count[s])
    {
        count[s]++;
    }
    else
    {
        count[s] = 1;
    }
}
console.log(count);
