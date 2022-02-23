<?php namespace App\Controllers;

use CodeIgniter\Controller;
Use App\Models\CustomerModel;
 
class CustomerController extends Controller
{

	protected $customer;
  protected $request;

	public function __construct()
	{
		 $this->customer = new CustomerModel();
    $this->request = \Config\Services::request();

	}

	public function index()
	{
		return view('customer');
	}

	public function test()
	{
		$data = $this->customer->findAll();
		return json_encode($data);
	}

    public function create()
    {
      try {
        $json = $this->request->getJSON();
        // create data
        $insert['name'] = $json->name;
        $insert['email'] = $json->email;
        $insert['phone'] = $json->phone;
        $insert['address'] = $json->address;
        $res = $this->customer->insert($insert);
        $response['success'] = true;
        $response['message'] = "Successful save";
        return json_encode($response);
      }
      catch (\Exception $e)
      {
        $response['success'] = false;
        $response['message'] = $e->getMessage();
        return json_encode($response);
      }
    }



    public function list()
    {
      try {
        $data = $this->customer->findAll();
        $response['data'] = $data;
        $response['success'] = true;
        $response['message'] = "Successful load";
        return json_encode($response);
      } catch (\Exception $e) {
        $response['success'] = false;
        $response['message'] = $e->getMessage();
        return json_encode($response);
      }
    }
  

}