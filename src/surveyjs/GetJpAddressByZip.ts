import * as rm from 'typed-rest-client/RestClient';

interface Address {
	status: number;
	message: string;
	results: {
		zipcode: number;
		prefcode: number;
		address1: string;
		address2: string;
		address3: string;
		kana1: string;
		kana2: string;
		kana3: string;
	};
};

export async function GetJpAddressByZip(zip: string) {
	const rest: rm.RestClient = new rm.RestClient('get-jp-address', 'https://zipcloud.ibsnet.co.jp');
	const res: rm.IRestResponse<Address> = await rest.get<Address>('/api/search?zipcode=' + zip);
	console.log(res.result);
}
