export const News= (el)=>{
   return(
 
        el.news.map((el,key)=>{
        return(
            <>
            <i key={key}>{el}</i>
            </>
        )
    })
)
}