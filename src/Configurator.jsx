import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Configurator = () => {

  const url = "https://fusion-backend.onrender.com"
    
    const [platform, setPlatform] = useState('')
    const [platforms, setPlatforms] = useState([])
    const [gpuType, setGpuType] = useState('')
    const [gpuTypes, setGpuTypes] = useState([])
    const [generation, setGeneration] = useState('')
    const [generations, setGenerations] = useState([])
    const [processor, setProcessor] = useState('')
    const [processors, setProcessors] = useState([])
    const [ramType, setRamType] = useState('')
    const [ramTypes, setRamTypes] = useState([])
    const [ramRGB, setRamRGB] = useState('')
    const [ramRGBs, setRamRGBs] = useState([])
    const rgbOption = [{
      id: '1',
      value : 'Y',
      option: 'Yes',
    },{
      id: '2',
      value : 'N',
      option: 'No',
    }]
    const [ramSize, setRamSize] = useState('')
    const [ramSizes, setRamSizes] = useState([])
    const [chipset, setChipset] = useState('')
    const [chipsets, setChipsets] = useState([])
    const [gpuBrand, setGpuBrand] = useState('')
    const [gpuBrands, setGpuBrands] = useState([])
    const [gpuModel, setGpuModel] = useState('')
    const [gpuModels, setGpuModels] = useState([])
    const [cooler, setCooler] = useState('')
    const [coolers, setCoolers] = useState([])
    const [primaryStorage, setPrimaryStorage] = useState('')
    const [primaryStorages, setPrimaryStorages] = useState([])
    const [secondaryStorage, setSecondaryStorage] = useState('')
    const [secondaryStorages, setSecondaryStorages] = useState([])
    const [psu, setPsu] = useState('')
    const [psus, setPsus] = useState([])
    const [cabinetBrand, setCabinetBrand] = useState('')
    const [cabinetBrands, setCabinetBrands] = useState([])
    const [cabinetModel, setCabinetModel] = useState('')
    const [cabinetModels, setCabinetModels] = useState([])

    const [pc, setPc] = useState({
      platform: '',
      gpuType: '',
      generation: '',
      processor: '',
      ramType: '',
      ramRGB: '',
      ramSize: '',
      chipset: '',
      gpuBrand: '',
      gpuModel: '',
      cooler: '',
      primaryStorage: '',
      secondaryStorage: '',
      psu: '',
      cabinetBrand: '',
      cabinetModel: '',
    })

    const[pcPrice, setPcPrice] =useState(0)

    const changePlatform = (e) => {
        setPlatform(e.target.value)
        setGpuType('')
        setGpuTypes([])
        setGeneration('')
        setGenerations([])
        setProcessor('')
        setProcessors([])
        setRamType('')
        setRamTypes([])
        setRamRGB('')
        setRamRGBs([])
        setRamSize('')
        setRamSizes([])
        setChipset('')
        setChipsets([])
        setGpuBrand('')
        setGpuBrands([])
        setGpuModel('')
        setGpuModels([])
        setCooler('')
        setCoolers([])
        setPrimaryStorage('')
        setPrimaryStorages([])
        setSecondaryStorage('')
        setSecondaryStorages([])
        setPsu('')
        setPsus([])
        setCabinetBrand('')
        setCabinetBrands([])
        setCabinetModel('')
        setCabinetModels([])
        setPcPrice('')
        setPc({...pc, platform: e.target.value})
        fetchGpuTypes()
    }

    const changeGpuType = (e) => {
        setGpuType(e.target.value)
        setGeneration('')
        setGenerations([])
        setProcessor('')
        setProcessors([])
        setRamType('')
        setRamTypes([])
        setRamRGB('')
        setRamRGBs([])
        setRamSize('')
        setRamSizes([])
        setChipset('')
        setChipsets([])
        setGpuBrand('')
        setGpuBrands([])
        setGpuModel('')
        setGpuModels([])
        setCooler('')
        setCoolers([])
        setPrimaryStorage('')
        setPrimaryStorages([])
        setSecondaryStorage('')
        setSecondaryStorages([])
        setPsu('')
        setPsus([])
        setCabinetBrand('')
        setCabinetBrands([])
        setCabinetModel('')
        setCabinetModels([])
        setPcPrice('')
        setPc({...pc, gpuType: e.target.value})
        fetchGenerations(platform, e.target.value)
    }

    const changeGeneration = (e) => {
        setGeneration(e.target.value)
        setProcessor('')
        setProcessors([])
        setRamType('')
        setRamTypes([])
        setRamRGB('')
        setRamRGBs([])
        setRamSize('')
        setRamSizes([])
        setChipset('')
        setChipsets([])
        setGpuBrand('')
        setGpuBrands([])
        setGpuModel('')
        setGpuModels([])
        setCooler('')
        setCoolers([])
        setPrimaryStorage('')
        setPrimaryStorages([])
        setSecondaryStorage('')
        setSecondaryStorages([])
        setPsu('')
        setPsus([])
        setCabinetBrand('')
        setCabinetBrands([])
        setCabinetModel('')
        setCabinetModels([])
        setPcPrice('')
        setPc({...pc, generation: e.target.value})
        fetchProcessors(platform,gpuType,e.target.value)
    }

    const changeProcessor = (e) => {
        setProcessor(e.target.value)
        setRamType('')
        setRamTypes([])
        setRamRGB('')
        setRamRGBs([])
        setRamSize('')
        setRamSizes([])
        setChipset('')
        setChipsets([])
        setGpuBrand('')
        setGpuBrands([])
        setGpuModel('')
        setGpuModels([])
        setCooler('')
        setCoolers([])
        setPrimaryStorage('')
        setPrimaryStorages([])
        setSecondaryStorage('')
        setSecondaryStorages([])
        setPsu('')
        setPsus([])
        setCabinetBrand('')
        setCabinetBrands([])
        setCabinetModel('')
        setCabinetModels([])
        setPcPrice('')
        setPc({...pc, processor: e.target.value})
        fetchRamTypes(e.target.value)
    }

    const changeRamType = (e) => {
        setRamType(e.target.value)
        setRamRGB('')
        setRamRGBs([])
        setRamSize('')
        setRamSizes([])
        setChipset('')
        setChipsets([])
        setGpuBrand('')
        setGpuBrands([])
        setGpuModel('')
        setGpuModels([])
        setCooler('')
        setCoolers([])
        setPrimaryStorage('')
        setPrimaryStorages([])
        setSecondaryStorage('')
        setSecondaryStorages([])
        setPsu('')
        setPsus([])
        setCabinetBrand('')
        setCabinetBrands([])
        setCabinetModel('')
        setCabinetModels([])
        setPcPrice('')
        setPc({...pc, ramType: e.target.value})
        fetchRamRGBs()
    }

    const changeRamRGB = (e) => {
        setRamRGB(e.target.value)
        setRamSize('')
        setRamSizes([])
        setChipset('')
        setChipsets([])
        setGpuBrand('')
        setGpuBrands([])
        setGpuModel('')
        setGpuModels([])
        setCooler('')
        setCoolers([])
        setPrimaryStorage('')
        setPrimaryStorages([])
        setSecondaryStorage('')
        setSecondaryStorages([])
        setPsu('')
        setPsus([])
        setCabinetBrand('')
        setCabinetBrands([])
        setCabinetModel('')
        setCabinetModels([])
        setPcPrice('')
        setPc({...pc, ramRGB: e.target.value})
        fetchRamSizes(ramType,e.target.value)
    }

    const changeRamSize = (e) => {
        setRamSize(e.target.value)
        setChipset('')
        setChipsets([])
        setGpuBrand('')
        setGpuBrands([])
        setGpuModel('')
        setGpuModels([])
        setCooler('')
        setCoolers([])
        setPrimaryStorage('')
        setPrimaryStorages([])
        setSecondaryStorage('')
        setSecondaryStorages([])
        setPsu('')
        setPsus([])
        setCabinetBrand('')
        setCabinetBrands([])
        setCabinetModel('')
        setCabinetModels([])
        setPcPrice('')
        setPc({...pc, ramSize: e.target.value}) 
        fetchChipsets(e.target.value)
    }

    const changeChipset = (e) => {
        setChipset(e.target.value)
        setGpuBrand('')
        setGpuBrands([])
        setGpuModel('')
        setGpuModels([])
        setCooler('')
        setCoolers([])
        setPrimaryStorage('')
        setPrimaryStorages([])
        setSecondaryStorage('')
        setSecondaryStorages([])
        setPsu('')
        setPsus([])
        setCabinetBrand('')
        setCabinetBrands([])
        setCabinetModel('')
        setCabinetModels([])
        setPcPrice('')
        setPc({...pc, chipset: e.target.value})
        fetchGpuBrands(gpuType)
    }

    const changeGpuBrand = (e) => {
        setGpuBrand(e.target.value)
        setGpuModel('')
        setGpuModels([])
        setCooler('')
        setCoolers([])
        setPrimaryStorage('')
        setPrimaryStorages([])
        setSecondaryStorage('')
        setSecondaryStorages([])
        setPsu('')
        setPsus([])
        setCabinetBrand('')
        setCabinetBrands([])
        setCabinetModel('')
        setCabinetModels([])
        setPcPrice('')
        setPc({...pc, gpuBrand: e.target.value})
        fetchGpuModels(e.target.value)
    }

    const changeGpuModel = (e) => {
        setGpuModel(e.target.value)
        setCooler('')
        setCoolers([])
        setPrimaryStorage('')
        setPrimaryStorages([])
        setSecondaryStorage('')
        setSecondaryStorages([])
        setPsu('')
        setPsus([])
        setCabinetBrand('')
        setCabinetBrands([])
        setCabinetModel('')
        setCabinetModels([])
        setPcPrice('')
        setPc({...pc, gpuModel: e.target.value})
        fetchCoolers(processor)
    }

    const changeCooler = (e) => {
        setCooler(e.target.value)
        setPrimaryStorage('')
        setPrimaryStorages([])
        setSecondaryStorage('')
        setSecondaryStorages([])
        setPsu('')
        setPsus([])
        setCabinetBrand('')
        setCabinetBrands([])
        setCabinetModel('')
        setCabinetModels([])
        setPcPrice('')
        setPc({...pc, cooler: e.target.value})
        fetchPrimaryStorage()
    }

    const changePrimaryStorage = (e) => {
        setPrimaryStorage(e.target.value)
        setSecondaryStorage('')
        setSecondaryStorages([])
        setPsu('')
        setPsus([])
        setCabinetBrand('')
        setCabinetBrands([])
        setCabinetModel('')
        setCabinetModels([])
        setPcPrice('')
        setPc({...pc, primaryStorage: e.target.value})
        fetchSecondaryStorage()
    }

    const changeSecondaryStorage = (e) => {
        setSecondaryStorage(e.target.value)
        setPsu('')
        setPsus([])
        setCabinetBrand('')
        setCabinetBrands([])
        setCabinetModel('')
        setCabinetModels([])
        setPcPrice('')
        setPc({...pc, secondaryStorage: e.target.value})
        fetchPsu()
    }

    const changePsu = (e) => {
        setPsu(e.target.value)
        setCabinetBrand('')
        setCabinetBrands([])
        setCabinetModel('')
        setCabinetModels([])
        setPcPrice('')
        setPc({...pc, psu: e.target.value})
        fetchCabinetBrands()
    }

    const changeCabinetBrand = (e) => {
        setCabinetBrand(e.target.value)
        setCabinetModel('')
        setCabinetModels([])
        setPcPrice('')
        setPc({...pc, cabinetBrand: e.target.value})
        fetchCabinetModels(e.target.value)
    }

    const changeCabinetModel = (e) => {
        setCabinetModel(e.target.value)
        setPc({...pc, cabinetModel: e.target.value})
    }

    const fetchPlatform = async () =>{
        try{
         const res = await axios.get(url+"/platform")
         setPlatforms(res.data)
        }
        catch(err){
         console.log(err);
        }
    }

    const fetchGpuTypes = async () =>{
        try{
         const res = await axios.get(url+"/gpuType")
         setGpuTypes(res.data)
        }
        catch(err){
         console.log(err);
        }
    }

    const fetchGenerations = async (platform,gpuType) =>{
        try{
         const res = await axios.get(url+"/series", {params: {platform,gpuType}})
         setGenerations(res.data)
        }
        catch(err){
         console.log(err);
        }
    }

    const fetchProcessors = async (platform,gpuType,generation) =>{
        try{
         const res = await axios.get(url+"/processor", {params: {platform,gpuType,generation}})
         setProcessors(res.data)
        }
        catch(err){
         console.log(err);
        }
    }
    
    const fetchRamTypes = async (processor) =>{
        try{
            const res = await axios.get(url+"/ramType", {params: {processor}})
            setRamTypes(res.data)
        }
        catch(err){
            console.log(err);
        }
    }

    const fetchRamRGBs = async () =>{
      try{
          setRamRGBs(rgbOption)
      }
      catch(err){
          console.log(err);
      }
    }   

    const fetchRamSizes = async (ramType,ramRGB) =>{
        try{
         const res = await axios.get(url+"/ramSize", {params: {ramType,ramRGB}})
         setRamSizes(res.data)
        }
        catch(err){
         console.log(err);
        }
    }

    const fetchChipsets = async (ramSize) =>{
        try{
         const res = await axios.get(url+"/chipset", {params: {processor,ramType,ramSize}})
         setChipsets(res.data)
        }
        catch(err){
         console.log(err);
        }
    }

    const fetchGpuBrands = async (gpuType) =>{
        try{
         const res = await axios.get(url+"/gpubrand", {params : {gpuType}})
         setGpuBrands(res.data)
        }
        catch(err){
         console.log(err);
        }
    }

    const fetchGpuModels = async (gpuBrand) =>{
        try{
         const res = await axios.get(url+"/gpumodel", {params : {gpuBrand}})
         setGpuModels(res.data)
        }
        catch(err){
         console.log(err);
        }
    }

    const fetchCoolers = async (processor) =>{
        try{
         const res = await axios.get(url+"/cooler", {params : {processor}})
         setCoolers(res.data)
        }
        catch(err){
         console.log(err);
        }
    }

    const fetchPrimaryStorage = async () =>{
        try{
         const res = await axios.get(url+"/storage")
         setPrimaryStorages(res.data)
        }
        catch(err){
         console.log(err);
        }
    }

    const fetchSecondaryStorage = async () =>{
        try{
         const res = await axios.get(url+"/storage")
         setSecondaryStorages(res.data)
        }
        catch(err){
         console.log(err);
        }
    }

    const fetchPsu = async () =>{
        try{
         const res = await axios.get(url+"/psu")
         setPsus(res.data)
        }
        catch(err){
         console.log(err);
        }
    }

    const fetchCabinetBrands = async () =>{
        try{
         const res = await axios.get(url+"/cabinetbrand")
         setCabinetBrands(res.data)
        }
        catch(err){
         console.log(err);
        }
    }

    const fetchCabinetModels = async (cabinetBrand) =>{
        try{
         const res = await axios.get(url+"/cabinetmodel", {params: {cabinetBrand}})
         setCabinetModels(res.data)
        }
        catch(err){
         console.log(err);
        }
    }

    const fetchPrice = async(pc) => {
      try{
        const res = await axios.get(url+"/price", {params: {pc}})
        setPcPrice(res.data)
        
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      if (platform === ''){
        fetchPlatform()
      }
      if (cabinetModel !== ''){
        fetchPrice(pc)
      }
    },[pc, platform, cabinetModel])

const customSelect = (obj) => {
  return(
   "px-3 mb-4 border-bottom "+ (obj===''?"border-dark":"border-danger")
)}

const customCol = () => {
  return(
   "col-sm-12 col-lg-6 col-xl-6 col-xxl-3 "
)}

return (
    <div  className="bg-black">
      <div className='container'>
        <div className="row align-items-center p-5">
          <div className='col-lg-6 col-md-5 col-sm-12'>
            <img src="favicon.ico" className="rounded" width={100} height={100} alt="1"/>
          </div>
          <div className='col-lg-6 col-md-7 col-sm-12'>
            <div className="h1 text-danger mt-4">Build Your Own PC</div>
          </div>
        </div>
      </div>
      <div className="container align-items-center">
        <div className='row gy-5'>
          <div className='col-lg-9 col-md-12 col-sm-12 order-lg-2'>
            <div className="row px-5 mt-3 row-gap-3" data-bs-theme="dark">
                <div className={customCol()}> 
                  <div className={customSelect(platform)}>
                    <div className="h6 text-light">Platform</div>
                    <select id="Platform" className="form-select form-select-sm" onChange={changePlatform} aria-label="Small select example">
                      <option hidden>Choose any one...</option>
                      {platforms.map(ctr=>(
                        <option key={ctr.idcomp} value={ctr.title}>{ctr.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={customCol()}> 
                  <div className={customSelect(gpuType)}>
                      <div className="h6 text-light">In-Built or Dedicated</div>
                      <select disabled = {platform === ''} id="GpuType" className="form-select form-select-sm" onChange={changeGpuType} aria-label="Small select example">
                        <option hidden>Choose any one...</option>
                        {gpuTypes.map(ctr=>(
                          <option key={ctr.idcomp} value={ctr.title}>{ctr.title}</option>
                        ))}
                      </select>
                  </div>
                </div>
                <div className={customCol()}> 
                  <div className={customSelect(generation)}>
                    <div className="h6 text-light">Processor Series</div>
                    <select disabled = {gpuType === ''} id="ProcessorSeries" className="form-select form-select-sm" onChange={changeGeneration} aria-label="Small select example">
                        <option hidden>Choose any one...</option>
                        {generations.map((title,index)=>(
                          <option key={index} value={title.series}>{title.series}</option>
                        ))}
                    </select>
                  </div> 
                </div>
                <div className={customCol()}> 
                  <div className={customSelect(processor)}>
                    <div className="h6 text-light">Processor</div>
                    <select disabled = {generation === ''} id="Processor" className="form-select form-select-sm" onChange={changeProcessor} aria-label="Small select example">
                      <option hidden>Choose any one...</option>
                      {processors.map(ctr=>(
                        <option key={ctr.idcomp} value={ctr.title}>{ctr.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
            </div>
            <div className="row px-5 mt-3 row-gap-3" data-bs-theme="dark">
              <div className={customCol()}>
                <div className={customSelect(ramType)}>
                  <div className="h6 text-light">RAM Type</div>
                  <select disabled = {processor === ''} id="RamType" className="form-select form-select-sm" onChange={changeRamType} aria-label="Small select example">
                    <option hidden>Choose any one...</option>
                    {ramTypes.map((title,index)=>(
                      <option key={index} value={title.chipsetRamType}>{title.chipsetRamType}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={customCol()}>
                <div className={customSelect(ramRGB)}>
                  <div className="h6 text-light">RAM RGB</div>
                  <select disabled = {ramType === ''} id="RamRgb" className="form-select form-select-sm" onChange={changeRamRGB} aria-label="Small select example">
                    <option hidden>Choose any one...</option>
                    {ramRGBs.map(ctr=>(
                      <option key={ctr.id} value={ctr.value}>{ctr.option}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={customCol()}>
                <div className={customSelect(ramSize)}>
                  <div className="h6 text-light">RAM Size</div>
                  <select disabled = {ramRGB === ''} id="RamSize" className="form-select form-select-sm" onChange={changeRamSize} aria-label="Small select example">
                      <option hidden>Choose any one...</option>
                      {ramSizes.map(ctr=>(
                        <option key={ctr.idram} value={ctr.ramSize}>{ctr.ramSize}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className={customCol()}>
                <div className={customSelect(chipset)}>
                  <div className="h6 text-light">Chipset</div>
                  <select disabled = {ramSize === ''} id="Chipset" className="form-select form-select-sm" onChange={changeChipset} aria-label="Small select example">
                    <option hidden>Choose any one...</option>
                    {chipsets.map(ctr=>(
                      <option key={ctr.idchipset} value={ctr.chipsetName}>{ctr.chipsetName}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="row px-5 mt-3 row-gap-3" data-bs-theme="dark">
              <div className={customCol()}>
                <div className={customSelect(gpuBrand)}>
                  <div className="h6 text-light">GPU Brand</div>
                  <select disabled = {chipset === ''} id="GpuBrand" className="form-select form-select-sm" onChange={changeGpuBrand} aria-label="Small select example">
                    <option hidden>Choose any one...</option>
                    {gpuBrands.map((title,index)=>(
                      <option key={index} value={title.gpubrand}>{title.gpubrand}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={customCol()}>
                <div className={customSelect(gpuModel)}>
                  <div className="h6 text-light">GPU Model</div>
                  <select disabled = {gpuBrand === ''} id="GpuModel" className="form-select form-select-sm" onChange={changeGpuModel} aria-label="Small select example">
                    <option hidden>Choose any one...</option>
                    {gpuModels.map(ctr=>(
                      <option key={ctr.idgpu} value={ctr.gpumodel}>{ctr.gpumodel}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={customCol()}>
                <div className={customSelect(cooler)}>
                  <div className="h6 text-light">Cooler</div>
                  <select disabled = {gpuModel === ''} id="Cooler" className="form-select form-select-sm" onChange={changeCooler} aria-label="Small select example">
                      <option hidden>Choose any one...</option>
                      {coolers.map(ctr=>(
                        <option key={ctr.idcooler} value={ctr.coolername}>{ctr.coolername}</option>
                      ))}
                    </select>
                </div>
              </div>
              <div className={customCol()}>
                <div className={customSelect(primaryStorage)}>
                  <div className="h6 text-light">Primary Storage</div>
                  <select disabled = {cooler === ''} id="Primarystorage" className="form-select form-select-sm" onChange={changePrimaryStorage} aria-label="Small select example">
                      <option hidden>Choose any one...</option>
                      {primaryStorages.map(ctr=>(
                        <option key={ctr.idstorage} value={ctr.storagename}>{ctr.storagename}</option>
                      ))}
                    </select>
                </div>
              </div>
            </div>
            <div className="row px-5 mt-3 row-gap-3" data-bs-theme="dark">
              <div className={customCol()}>
                <div className={customSelect(secondaryStorage)}>
                  <div className="h6 text-light">Secondary Storage</div>
                  <select disabled = {primaryStorage === ''} id="SecondaryStorage" className="form-select form-select-sm" onChange={changeSecondaryStorage} aria-label="Small select example">
                    <option hidden>Choose any one...</option>
                    {secondaryStorages.map(ctr=>(
                      <option key={ctr.idstorage} value={ctr.storagename}>{ctr.storagename}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={customCol()}>
                <div className={customSelect(psu)}>
                  <div className="h6 text-light">Power Supply Unit</div>
                  <select disabled = {secondaryStorage === ''} id="Psu" className="form-select form-select-sm" onChange={changePsu} aria-label="Small select example">
                    <option hidden>Choose any one...</option>
                    {psus.map(ctr=>(
                      <option key={ctr.idpsu} value={ctr.psuname}>{ctr.psuname}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={customCol()}>
                <div className={customSelect(cabinetBrand)}>
                  <div className="h6 text-light">Cabinet Brand</div>
                  <select disabled = {psu === ''} id="CabinetBrand" className="form-select form-select-sm" onChange={changeCabinetBrand} aria-label="Small select example">
                    <option hidden>Choose any one...</option>
                    {cabinetBrands.map((ctr,index)=>(
                      <option key={index} value={ctr.cabinetbrand}>{ctr.cabinetbrand}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={customCol()}>
                <div className={customSelect(cabinetModel)}>
                  <div className="h6 text-light">Cabinet Model</div>
                  <select disabled = {cabinetBrand === ''} id="CabinetModel" className="form-select form-select-sm" onChange={changeCabinetModel} aria-label="Small select example">
                    <option hidden>Choose any one...</option>
                    {cabinetModels.map((ctr,index)=>(
                      <option key={index} value={ctr.cabinetmodel}>{ctr.cabinetmodel}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-12 col-sm-12 order-sm-2 order-md-1 border border-secondary rounded'>
            <div className='h3 text-danger text-center mt-3 mb-3'>Components</div>
            <div className='h6 offset-2 text-light text-start'>{processor}</div>
            <div className='h6 offset-2 text-light text-start'>{ramSize}</div>
            <div className='h6 offset-2 text-light text-start'>{chipset}</div>
            <div className='h6 offset-2 text-light text-start'>{(gpuModel==='Stock'?'':gpuModel)}</div>
            <div className='h6 offset-2 text-light text-start'>{(cooler==='Stock'?'':cooler)}</div>
            <div className='h6 offset-2 text-light text-start'>{primaryStorage}</div>
            <div className='h6 offset-2 text-light text-start'>{(secondaryStorage==='NA'?'':secondaryStorage)}</div>
            <div className='h6 offset-2 text-light text-start'>{psu}</div>
            <div className='h6 offset-2 text-light text-start mb-3'>{cabinetModel}</div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="row p-5" data-bs-theme="dark">
        <div className="col-sm-12 col-md-12 col-lg-2 text-center">
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 px-4 mb-3 offset-1">
          <div className="h4 text-light-emphasis">Price: {pcPrice.price > 0?"₹ "+ new Intl.NumberFormat('en-IN').format(pcPrice.price)+"/-":""}</div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 px-4 offset-1">
          <div className="btn btn-outline-danger">Add to Cart</div>
        </div>
        </div>
      </div>
      <div className='bg-black' style={{height:"43.2vh"}}></div>
    </div>
  )
}

export default Configurator