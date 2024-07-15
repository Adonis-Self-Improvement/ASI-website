import "./tree.css"


export const XP = ({xp}) => {
  const xpTypes = [
    {type: "Mental", amount: xp.mental, color: "#2F54EB"},
    {type: "Physical", amount: xp.physical, color: "#6A1B9A"},
    {type: "Financial", amount: xp.financial, color: "#FF9800"},
    {type: "Social", amount: xp.social, color: "#CA99A9"},
    {type: "Spiritual", amount: xp.spiritual, color: "#4CAF50"},
    {type: "Overall", amount: xp.overall(), color: "#1A4117", class:"xp-text"},
  ]
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      {xpTypes.map((xpt, index) => (
        xpt.amount !== 0 &&
        <div key={index} style={{display: "flex", flexDirection: "row"}}>
          <span className={xpt.class} style={{color: xpt.color}}>{xpt.type}:</span>
          <span className={xpt.class} style={{marginLeft: 5}}>+{xpt.amount} XP</span>
        </div>
      ))}
    </div>
  )
}
