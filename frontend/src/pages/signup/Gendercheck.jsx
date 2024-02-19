const GenderCheckbox = ({onCheckbox, selectGender}) => {
    	return (
    		<div className='flex'>
    			<div className='form-control'>
    				<label className={`label gap-2 cursor-pointer ${selectGender === "male" ? "selected" : ""}`}>
    					<span className='label-text text-gray-300'>Male</span>
    					<input type='checkbox' className='checkbox border-slate-900' 
							checked = {selectGender === "male"}
							onChange = {()=>{
								onCheckbox("male");
							}}
						/>
						
    				</label>
    			</div>
    			<div className='form-control'>
    				<label className={`label gap-2 cursor-pointer ${selectGender === "female" ? "selected" : ""}`}>
    					<span className='label-text text-gray-300'>Female</span>
    					<input type='checkbox' className='checkbox border-slate-900' 
							checked = {selectGender === "female"}
							onChange = {()=>{
								onCheckbox("female");
							}}
						/>
						
    				</label>
    			</div>
    		</div>
    	);
};
export default GenderCheckbox;