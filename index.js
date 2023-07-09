a =0;
b=0;
c=0;
opt="";

function fun(e)
{
    //frm.out.value+=e.value;

    v=e.value;
    
    if(v=="!")
    {
        a=parseInt(frm.out.value);
        f=1;
        for(i=1;i<=a;i++)
        {
            f=f*i;
        }
        c=f;
        frm.out.value=c.toString();
}
    else if(v=="^^")
    {
        
            a=parseInt(frm.out.value);
            s=0;
            s=a*a;
            c=s;
        frm.out.value=c.toString();
    }
    else if(v=="^^^")
    {
        
            a=parseInt(frm.out.value);
            k=0;
            k=a*a*a;
            c=k;
        frm.out.value=c.toString();
    }

    else if(v=="%")
    {
        
            a=parseInt(frm.out.value);
            p=0;
            p=a/100;
            c=p;
        frm.out.value=c.toString();
    }

    else if(v=="()")
    {
        
        a=frm.out.value;
        last = a[a.length - 1];
        
        ope="(";
        clos=")";
        c1=0;
        m1=0;
        for(i in a)
        {
            if(a[i]==ope)
            {
                c1=c1+1;

            }
            else if(a[i]==clos)
            {
                m1=m1+1;
            }
        }

        if(c1==0 || c1==m1 ||last=="+" || last=="-" || last=="*"||last=="/"&&last!=8&&last!=9&&last!=0&&last!=1&&last!=2&&last!=3&&last!=4&&last!=5&&last!=6&&last!=7)
        {
            frm.out.value += ope;
        }

        else if(c1>m1 )
        {
                frm.out.value += clos;
        }
        else{
            frm.out.value += ope;
        }
        
    }
    else if(v=="#")
    {
        frm.out.value="";
    }

    else if(v=="=")
    {
        c=eval(frm.out.value);
        frm.out.value=c.toString();
    }
    
    else{
        frm.out.value+=v;
    }
}

var colo = ["#F0B1D1","#FF6A6A","#91F791"];
var col = ["#9FC2C2","#90B1EF","#E6E6FA"];
var co = ["#76E1D5","#B7BAB9","#FFF0F5"];
var i = 0;

function ff(){
    i = i < colo.length ? ++i : 0;
    
    document.getElementById("clearr").style.backgroundColor = colo[i];
    document.getElementById("but()").style.backgroundColor = colo[i];
    document.getElementById("but%").style.backgroundColor = colo[i];
    document.getElementById("but/").style.backgroundColor = colo[i];
    document.getElementById("but*").style.backgroundColor = colo[i];
    document.getElementById("but-").style.backgroundColor = colo[i];
    document.getElementById("but+").style.backgroundColor = colo[i];
    document.getElementById("fact").style.backgroundColor = colo[i];
    document.getElementById("but1").style.backgroundColor = col[i];
    document.getElementById("but2").style.backgroundColor = col[i];
    document.getElementById("but3").style.backgroundColor = col[i];
    document.getElementById("but4").style.backgroundColor = col[i];
    document.getElementById("but5").style.backgroundColor = col[i];
    document.getElementById("but6").style.backgroundColor = col[i];
    document.getElementById("but7").style.backgroundColor = col[i];
    document.getElementById("but8").style.backgroundColor = col[i];
    document.getElementById("but9").style.backgroundColor = col[i];
    document.getElementById("but0").style.backgroundColor = col[i];
    document.getElementById("but00").style.backgroundColor = col[i];
    document.getElementById("but.").style.backgroundColor = col[i];
    document.getElementById("p2").style.backgroundColor = col[i];
    document.getElementById("p3").style.backgroundColor = col[i];
    document.getElementById("e").style.backgroundColor = co[i];
    
};
