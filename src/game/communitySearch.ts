export type LengthFilter = ''|'short'|'medium'|'long'|'xl';
export function matchesCommunityLevel(level:{name:string;author:string;id:string;difficulty?:string|null;length:number;file?:{speed?:number;startMode?:string}},query:string,difficulty:string,length:LengthFilter,mode:string){
 const q=query.trim().toLowerCase();
 if(q&&![level.name,level.author,level.id,level.difficulty||'Unrated'].some(s=>s.toLowerCase().includes(q)))return false;
 if(difficulty&&(level.difficulty||'Unrated')!==difficulty)return false;
 if(mode&&(level.file?.startMode||'cube')!==mode)return false;
 const seconds=level.length*40/(level.file?.speed||300);
 return !length||(length==='short'?seconds<30:length==='medium'?seconds>=30&&seconds<60:length==='long'?seconds>=60&&seconds<120:seconds>=120);
}
