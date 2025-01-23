/**
* Made by: Dani Technology (Full Stack Engineer)
* Created on: January 10, 2024
* Contact developer:
* - WhatsApp: +62 838-3499-4479 or +62 823-2066-7363
* - Email: dani.technology.id@gmail.com
* - GitHub: https://github.com/dani-techno
*/

module.exports = {
	pairing_mode: true,
	//prefix: '.', // Delete or disable section code "prefix: '?'," if the bot does not want to use prefix.
	chat_mode: 'default', // default/self/private/group
	connection_status_message: false,
	only_show_command_chat: false,
	group_member_status_message: false,
	bot_offline_status: false,
	automatic_read_messages: true,
	automatic_update_profile_status: [false, "Status"],
	automatic_typing_or_recording: [true, "typing"], // typing/recording
	owner_number: '6283838359251',
	owner_name: 'Muhammad David Aryanto',
	bot_name: 'totorostore',
	api: {
		base_url: 'https://forestapi.web.id', // Do not change this URL.
    	secret_key: 'sk-vropwcc4sy3p9q',
    	dana: {
    		name: 'david',
    		number: '083838359251',
    		email: 'muhammaddavidaryanto69@gmail.com'
    	},
    	profit: 2 // This value will be divided by 100 and divided according to the product price.
    }
};
