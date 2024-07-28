
export default function Gallery() {
    const [answer,setAnswer] = React.useState('');
    const [error,setError] = React.useState(null);
    const [statut,setStatut] = React.useState('typing');
  
    async function handleSubmit(e){
      e.preventDefault();
      setStatut('submiting');
      try{
        await submitForm(answer);
        setStatut('success');
      }
      catch (error){
        setStatut('typing');
        setError(error);
  
        setTimeout(()=>{
          setError(null);
        },3000)
      }
    }
  
    function handleNextChange(e){
      setAnswer(e.target.value);
    }
  
    if(statut === "success"){
      return <h1>C'est exact!</h1>
    }
   
      return(
        <>
          <h2>Quiz sur les villes!</h2>
          <p>
            Dans quelle ville trouve t-on une pancarte qui transforme l'ai en eau potable.
          </p>
          <form onSubmit={handleSubmit}>
            <textarea disabled={statut === "submiting"} value={answer} onChange={handleNextChange}/>
              <br/>
              <button disabled={
                answer.length === 0 || statut ==='submiting'}>
                Envoyer
              </button>
              {error !== null && <p style={{color:'red'}} className='error'>{error.message}</p>}
          </form>
        </>
      )
    }
  
  
  function submitForm(answer){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(answer.toLowerCase() === "lima"){
          resolve();
        }else{
          reject(new Error('Bonne idee, mais mauvaise response. Ressayer!'))
        }
      },1500);
    })
  }