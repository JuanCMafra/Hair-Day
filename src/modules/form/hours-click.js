export function hoursClick(){
  const hours = document.querySelectorAll('.hour-available')
  
  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      //Tendo certeza que não vai ter nenhum horário com a classe selecionada
      hours.forEach((hour)=>{
        hour.classList.remove("hour-selected")
      })

      //Adicionando a classe somente no horário selecionado
      selected.target.classList.add("hour-selected")
    })
  })
}