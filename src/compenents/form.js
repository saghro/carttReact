import 'bootstrap/dist/css/bootstrap.min.css';


function Form() {
  return (
    <div >
 <div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1>Shopping Cart</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-md-8">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">Product 1</h5>
						<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac tincidunt mauris. Suspendisse potenti. Proin in lectus vel lacus bibendum tincidunt. Fusce fringilla odio eget nunc vestibulum, sit amet feugiat velit varius. Donec in libero vel ipsum ultricies malesuada. Fusce vitae odio est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed nec tincidunt orci. Sed vel velit non lectus rutrum bibendum. Vivamus ultrices blandit lectus, nec facilisis turpis fringilla sit amet.</p>
						<a href="#" class="btn btn-primary">Add to Cart</a>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">Shopping Cart</h5>
						<ul class="list-group">
							<li class="list-group-item d-flex justify-content-between align-items-center">
								Product 1
								<span class="badge badge-primary badge-pill">1</span>
							</li>
						</ul>
						<div class="mt-3">
							<button type="button" class="btn btn-primary">Checkout</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  );
}

export default Form;
