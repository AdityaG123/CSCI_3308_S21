#!/bin/sh
# Aditya Gopalan
# February 9th, 2021
# Lab 3: Part B - Take Home Script

count_lines() {
	totalLines=$(sed -n '$=' $FILE)
	echo -e "The number of lines in this file are: " "$totalLines"
	echo -e "\n"
	
}

count_words() {
	
	word1=$(grep -o -i Lorem $FILE | grep -c "") 
	echo -e "The amount of times that 'Lorem' is shown in the file is: $word1" 
	echo -e "\n"
	echo "The lines that 'Lorem' occurs are: " 
	echo $(grep Lorem $FILE) 
	echo -e "\n"

	word2=$(grep -o -i model $FILE | grep -c "")
        echo -e "The amount of times that 'model' is shown in the file is: $word2" 
	echo -e "\n"
        echo "The lines that 'model' occurs are: "
        echo $(grep model $FILE) 
	echo -e "\n"

	word3=$(grep -o -i Ipsum $FILE | grep -c "")
        echo -e "The amount of times that 'Ipsum' is shown in the file is: $word3" 
	echo -e "\n"
        echo "The lines that 'Ipsum' occurs are: "
        echo $(grep Ipsum $FILE) 
	echo -e "\n"

	word4=$(grep -o -i will $FILE | grep -c "")
        echo -e "The amount of times that 'will' is shown in the file is: $word4" 
	echo -e "\n"
        echo "The lines that 'will' occurs are: "
        echo $(grep will $FILE)
	echo -e "\n"

}

add_text() {
	printf "Please add some text \n"
	read userText
	printf "$userText" >> $FILE
}


copy_and_exit() {
	mkdir solution
	cp $FILE solution
}



FILE=$1

if [ -f "$FILE" ]; then
	
	inMenu=0
	
	while [ $inMenu -le 0 ] 
	do

		echo -e "Choose one of the following options: \n1) count_lines() \n2) count_words() \n3) add_text() \n4) copy_and_exit()\n"

		read INPUT_STRING
		case $INPUT_STRING in 
			1)
				count_lines
				;;	

			2)
				count_words
				;;

			3)
				add_text 
				;;

			4)
				copy_and_exit
				inMenu=$((inMenu + 1))
				;;

			*)
				echo -e "\n"
				echo -e "Not a valid option, please select one of the options \n"
				;;

			esac
	done

else
	echo "$FILE does not exist"
	exit
fi
