type CData = {
  idc: number;
  name: String;
  lmess: String;
};

export const contactdata: Array<CData> = [
  { idc: 1, name: "Petr", lmess: "lorem Petr" },
  { idc: 2, name: "Bob", lmess: "lorem Bob" },
  { idc: 3, name: "Anna", lmess: "lorem Anna" },
];

type MData = {
id:number;
idc:number;
mymess:boolean;
text:String;
}


export const messdata: Array<MData> = [
  {id:1, idc:1, mymess:true, text:'Lorem ipsum dolor sit amet.1'},
  {id:2, idc:2, mymess:false, text:'Lorem ipsum dolor sit amet.2'},
  {id:3, idc:3, mymess:true, text:'Lorem ipsum dolor sit amet.3'},
  {id:4, idc:1, mymess:false, text:'Lorem ipsum dolor sit amet.1'},
  {id:5, idc:2, mymess:true, text:'Lorem ipsum dolor sit amet.2'},
  {id:6, idc:3, mymess:false, text:'Lorem ipsum dolor sit amet.3'},
]
//id, idc, mymess:bolen(true,false), text, data(time)
// 1 2 3 - 2 3 - 1 2 my or no my
// key mymes text
//Lorem ipsum dolor sit amet.
