function NavigaytionBar() {
	return (
		<div className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-md">
				<a className="navbar-brand" href="/">
					Abstract | Help Center
				</a>

				<div className="navbar-collapse collapse w-100">
					<ul className="navbar-nav ms-auto">
						<li className="px-2">
							<button type="button" class="btn text-light" style={{"background-color":"#000000", "border-color": "#fff"}}>
								Submit a request
							</button>
            </li>
            <li className="px-2">
              <button type="button" class="btn text-light" style={{"background-color":"#4C5FD5"}}>
								Sign in
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default NavigaytionBar;
