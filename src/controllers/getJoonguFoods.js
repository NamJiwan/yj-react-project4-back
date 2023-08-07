export const getJoonguFoods = async (req, res) => {
    await fetch("https://api.odcloud.kr/api/15052602/v1/uddi:855807e2-fe8a-4e47-8a5a-ce1894e410d7_201909031553?page=1&perPage=10&serviceKey=99KIHGGjBmzaox6aET3NVVM1tdw5HU2mHUeFW%2BM6Fnl0BIDFW4%2FmH8dCaB4LR1tb0LsUAXePe1GHwhyu%2BZ%2FEBA%3D%3D").then(res => res.json()).then(data => {console.log(data)
    res.send(data);
})
}